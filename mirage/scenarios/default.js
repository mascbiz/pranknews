let today = new Date();
let year = today.getUTCFullYear();


export default function(server) {
  // Seed your development database using your factories. This
  // data will not be loaded in your tests.

  server.create("video", {
    id: 1,
    name: "Rick Astley",
    url: "https://www.youtube.com/embed/DLzxrzFCyOs?autoplay=true&iv_load_policy=3",
    startSeconds: "0",
    ytid: "DLzxrzFCyOs",
    imageName: "rick.jpg",
    slogan: `You got Rick Rolled in ${year}!`,
    front: true
  });

  server.create("video", {
    id: 2,
    name: "Tay Zonday",
    url: "https://www.youtube.com/embed/EwTZ2xpQwpA?autoplay=true&start=10&iv_load_policy=3",
    startSeconds: "10",
    ytid: "EwTZ2xpQwpA",
    imageName: "tay.jpg",
    slogan: "You got Zondayed!",
    front: true
  });

  server.create("video", {
    id: 3,
    name: "Epic Sax Guy",
    url: "https://www.youtube.com/embed/kxopViU98Xo?autoplay=true&iv_load_policy=3",
    startSeconds: "0",
    ytid: "kxopViU98Xo",
    imageName: "sax.jpg",
    slogan: "You got saxed!",
    front: true
  });

  server.create("video", {
    id: 4,
    name: "Snow",
    url: "https://www.youtube.com/embed/StlMdNcvCJo?autoplay=true&start=12&iv_load_policy=3",
    startSeconds: "12",
    ytid: "StlMdNcvCJo",
    imageName: "snow.jpg",
    slogan: "You just got informed!",
    front: false
  });

}
