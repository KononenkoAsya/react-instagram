const initialState = [
    {
      postId: 1,
      likes: 13840,
      putLike: 'false',
      name: 'dali',
      profile: 'https://24smi.org/public/media/235x307/celebrity/2017/02/24/0TMwrcgvLBtb_salvador-dali.jpg',
      url: 'https://muzei-mira.com/templates/museum/images/paint/postojanstvo-pamiati-dali+.jpg',
      hashtag: '#mustache #surrealism This is my work'      
    },
    {
      postId: 2,
      likes: 3,
      putLike: 'false',
      name: 'van_gogh',
      profile: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project.jpg',
      url: 'https://interesnoznat.com/wp-content/uploads/9-site-598-750x480.png',
      hashtag: 'I cut off my ear, bitches'
    },
    {
      postId: 3,
      likes: 1875,
      putLike: 'false',
      name: 'eddie_munk',
      profile: 'http://mindlabyrinth.ru/upload/medialibrary/10d/10dde20d546a05ac67b869cce3b66f8a.jpg',
      url: 'https://cs4.pikabu.ru/post_img/big/2014/08/30/1/1409347806_1684721904.jpg',
      hashtag: '#screeeeeeeeeeeaaaaaam '
    },
    {
      postId: 4,
      likes: 100234,
      putLike: 'false',
      name: 'leo_da_vinci',
      profile: 'https://cs8.pikabu.ru/post_img/big/2017/06/24/5/149828956414077604.jpg',
      url: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Leonardo_da_Vinci_046.jpg',
      hashtag: '"Lady with an Ermine" is the second most famous woman in my life '
    },
    {
      postId: 5,
      likes: 98417,
      putLike: 'false',
      name: 'mr_botticelli',
      profile: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Sandro_Botticelli_083.jpg/267px-Sandro_Botticelli_083.jpg',
      url: 'https://i.ytimg.com/vi/NwKBMX5ECcI/maxresdefault.jpg',
      hashtag: 'Nascita di Venere'
    }
];


export default function(state = initialState, action) {
  switch(action.type) {
    case 'UPDATE_COUNT':
      const updatedItems = state.map(item => {
        if(item.postId === action.id && item.putLike === 'false'){
          return { 
          ...item, 
          likes: action.payload+1,
          putLike: action.plus}
        }
        else {
          if(item.postId === action.id && item.putLike === 'true'){
          return { 
          ...item, 
          likes: action.payload-1,
          putLike: action.minus}
        }}
        return item
      })
      return updatedItems

      default:
      return state
}
}

