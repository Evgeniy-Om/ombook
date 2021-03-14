const state = {
   user: {
      shortName: "Carolyn",
      name: "Carolyn Campbell",
      fullName: "Carolyn Janet Campbell",
      avatarUrl: "images/avatar-2.jpg",
      messengerCount: 0,
      friendsCount: 0,
      notificationCount: 0,
      events: [
         "Tiffany Crawford",
         "Tiffany Crawford2",
         "Tiffany Crawford3",
         "Tiffany Crawford4",
      ],
   },
   newsfeedPage: {
      stories: [
         {name: "Kathleen Campbell", avatarUrl: "images/avatar-3.jpg", url: "#", date: "Today at 1:08 AM"},
         {name: "Anthony Wood", avatarUrl: "images/avatar-1.jpg", url: "#", date: "Yesterday at 1:08 AM"},
         {name: "Tiffany Crawford", avatarUrl: "images/avatar-4.jpg", url: "#", date: "Yesterday at 1:08 AM"},
      ],
      groups: [
         {name: "Designers team", url: "#", favicon: ""},
         {name: "Where to travel", url: "#", favicon: ""},
         {name: "Nice place to visit", url: "#", favicon: ""},
      ],
      explore: [
         {name: "Events near you", url: "#", favicon: ""},
         {name: "Saved posts", url: "#", favicon: ""},
         {name: "Wishlist shopping", url: "#", favicon: ""},
      ],
      posts: [
         {
            author: {
               name: "Kathleen Campbell",
               avatarUrl: "images/avatar-3.jpg",
               profileUrl: "#",
            },
            content: {
               type: "post",
               date: "Today at 1:08 AM",
               text: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
               hashtags: "#stateofmind",
               likes: 322,
               totalComments: 32,
               comments: [
                  {
                     author: {
                        name: "Kathleen Campbell",
                        avatarUrl: "images/avatar-3.jpg",
                        profileUrl: "#",
                     },
                     content: {
                        date: "Today at 1:08 AM",
                        text: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
                        hashtags: "#stateofmind",
                        likes: 21,
                        replies: [
                           {
                              author: {
                                 name: "Kathleen Campbell",
                                 avatarUrl: "images/avatar-3.jpg",
                                 profileUrl: "#",
                              },
                              content: {
                                 date: "Today at 1:08 AM",
                                 text: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
                                 likes: 21,
                              }
                           }
                        ]
                     }
                  }
               ]
            }
         }
      ]
   }
}

export default state;