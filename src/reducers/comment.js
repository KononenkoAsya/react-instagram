const initialState = [
  {
    postId: 1,
    user: 'asya_super',
    comment: ' 🍌 🍌 🍌 🍌 🍌 '
  },
  {
    postId: 1,
    user: 'leo_da_vinci',
    comment: 'huita'
  },
    {
    postId: 1,
    user: 'van_gogh',
    comment: ' Я не вижу ваших ушей '
  },
    {
    postId: 1,
    user: 'leo_da_vinci',
    comment: 'huita v2'
  },
  {
    postId: 1,
    user: 'picasso',
    comment: '🌍🌍🌍🌍🌍🌍🌍'
  },
    {
    postId: 3,
    user: ' dali',
    comment: 'so-so'
  },
    {
    postId: 3,
    user: 'raffaello',
    comment: 'я в шоке'
  },
    {
    postId: 3,
    user: 'raffaello',
    comment: 'сложно'
  },
    {
    postId: 3,
    user: 'mone_t',
    comment: 'ahahha'
  },
    {
    postId: 4,
    user: 'dali',
    comment: 'good job'
  },
    {
    postId: 4,
    user: 'mr_botticelli',
    comment: 'skype?'
  },
    {
    postId: 5,
    user: 'leo_da_vinci',
    comment: '🦕🦕🦕🦕🦕'
  },
    {
    postId: 5,
    user: 'leo_da_vinci',
    comment: '❤❤❤❤'
  }
];


export default function(state = initialState, action) {
  switch(action.type) {
      case 'ADD_COMMENT':
        return [
            ...state,
            {
  		postId: action.id,
  		user: 'a_s_y_a',
  		comment: action.text}
     	]
      default:
      return state
}
}