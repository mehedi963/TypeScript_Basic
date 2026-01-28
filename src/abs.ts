//Abstruction

// interface MediaPlayer {
//     play(): void;
//     pause(): void;
//     stop(): void;
// }

// class Music implements MediaPlayer{

//     play(): void {
//         console.log("first play")
//     }

//     pause(): void {
//         console.log("first pause");
//     }

//     stop(): void {
//         console.log("first stop");
//     }
// }

// const player1 = new Music();
// player1.play();
// player1.stop();



//Abstruction
abstract class MediaPlayer {
   abstract play(): void;
   abstract pause(): void;
   abstract stop(): void;
}

class Music extends MediaPlayer{

    play(): void {
        console.log("first play")
    }

    pause(): void {
        console.log("first pause");
    }

    stop(): void {
        console.log("first stop");
    }
}

const player1 = new Music();
player1.play();
player1.stop();