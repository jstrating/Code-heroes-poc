'use strict';

const admin = require('firebase-admin');

export class DatabaseTriggers {
  // static async UserOnlineStatusSync(event): Promise<any> {
  //   const status = event.data.val();
  //   const userRef = admin.firestore().collection('users').doc(event.params.userId);
  //   return userRef.set({ status: status }, { merge: true });
  // }
  static async onScoreEvent(event): Promise<any> {
    const score = event.data.data();
    console.log('score', score);

    if(score.player) {
      const playerRef = admin.firestore().collection('games').doc(score.game).collection('players').doc(score.player);
      const playerDoc = await playerRef.get();
      if(playerDoc.exists) {
        const player = playerDoc.data();
        console.log(player);
        await playerRef.set({ score: (player.score + score.score)}, { merge: true});
      }

    }

    if(score.team) {
        const teamRef = admin.firestore().collection('games').doc(score.game).collection('teams').doc(score.team);
        const teamDoc = await teamRef.get();
        if(teamDoc.exists) {
          const team = teamDoc.data();
          console.log(team);
          await teamRef.set({ score: (team.score + score.score)}, { merge: true});
        }

    }
  }
}
