import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
// import * as moment from 'moment';

admin.initializeApp(functions.config().firebase);

import { DatabaseTriggers as triggers } from './database-triggers';

export const scores = functions.https.onRequest(async (request, response) => {
  const scoreObj = request.body;

  if (!(scoreObj.game && scoreObj.score)) {
    response.json({ success: false });
    return;
  }

  console.log('Input score', scoreObj);

  const score = <any>{};
  if (scoreObj.player || '') score.player = scoreObj.player;
  if (scoreObj.team || '') score.team = scoreObj.team;
  if (scoreObj.description || '') score.description = scoreObj.description;
  score.score = scoreObj.score || 0;
  if (scoreObj.game || '') score.game = scoreObj.game;
  score.time = scoreObj.time || new Date();
  if (scoreObj.category || '') score.category = scoreObj.category;

  console.log('Create new document', score);

  await admin.firestore().collection('scores').add(score);
  response.json({ success: true })

});

exports.onScore = functions.firestore.document('scores/{scoreId}')
  .onCreate(triggers.onScoreEvent);


exports.testPubSub = functions.pubsub.topic('topic-name').onPublish((message) => {
  console.log(message);
  console.log(message.json);
  console.log(message.json.name);
  return Promise.resolve(true);
})