/* eslint global-require: "off" */
import update from 'immutability-helper';
import {SET_ACTIVE_VIDEO, SUBMIT_COMMENT} from '../actions/videos/actionTypes';

const initialState = {
  videos: [
    {
      video: require('../../assets/videos/video1.mp4'),
      id: 0,
      comments: [
        {
          id: 1,
          avatar: 'https://i.pravatar.cc/300',
          name: 'quam laborum',
          isCreator: true,
          likedByCreator: true,
          likes: 10,
          body: 'laudantium enim quasi',
          responses: [
            {
              commentId: 1,
              id: 61,
              likes: 10,
              avatar: 'https://i.pravatar.cc/300',
              likedByCreator: true,
              name: 'quidem',
              body: 'deserunt cumque laudantium et et ',
            },
            {
              commentId: 1,
              id: 62,
              isCreator: true,
              avatar: 'https://i.pravatar.cc/300',
              likes: 200,
              likedByCreator: false,
              name: 'liberobeatae',
              body: 'tempore dolorum corrupti facilis praesentium ',
            },
            {
              commentId: 1,
              id: 63,
              avatar: 'https://i.pravatar.cc/300',
              likes: 23,
              likedByCreator: false,
              name: 'occaecati dolor',
              body:
                'aut eligendi et molestiae voluptatum tempora officia nihil ',
            },
            {
              commentId: 1,
              id: 64,
              likes: 11,
              avatar: 'https://i.pravatar.cc/300',
              likedByCreator: true,
              name: 'consequatur aut ',
              body:
                'sed illum quis ut aut culpa labore aspernatur illo dolorem quia vitae ut ',
            },
          ],
        },
        {
          id: 2,
          likes: 44,
          name: 'quo vero reiciendis velit similique earum',
          avatar: 'https://i.pravatar.cc/300',
          body:
            'est natus enim nihil est dolore omnis voluptatem numquam et omnis occaecati quod ullam at voluptatem error expedita pariatur nihil sint nostrum voluptatem reiciendis et',
        },
        {
          id: 3,
          likedByCreator: true,
          likes: '1K',
          name: 'oio adipisci rerum aut animi',
          avatar: 'https://i.pravatar.cc/300',
          body:
            'quia molestiae reprehenderit quasi aspernatur aut expedita occaecati aliquam eveniet laudantium omnis quibusdam delectus saepe quia accusamus maiores nam est cum et ducimus et vero voluptates excepturi deleniti ratione',
        },
        {
          id: 4,
          likes: 34,
          name: 'alias odio sit',
          avatar: 'https://i.pravatar.cc/300',
          body:
            'non et atque occaecati deserunt quas accusantium unde odit nobis qui voluptatem quia voluptas consequuntur itaque dolor et qui rerum deleniti ut occaecati',
          responses: [
            {
              commentId: 4,
              id: 90,
              avatar: 'https://i.pravatar.cc/300',
              name: 'quidem itaque dolores quod laborum aliquid molestiae',
              body:
                'deserunt cumque laudantium et et odit quia sint quia quidem quibusdam debitis fuga in tempora deleniti impedit consequatur veniam reiciendis autem porro minima',
            },
            {
              commentId: 4,
              id: 91,
              avatar: 'https://i.pravatar.cc/300',
              name: 'libero beatae consequuntur optio est hic',
              body:
                'tempore dolorum corrupti facilis praesentium sunt iste recusandae unde quisquam similique alias consequuntur voluptates velit',
            },
            {
              commentId: 5,
              id: 92,
              avatar: 'https://i.pravatar.cc/300',
              name:
                'occaecati dolor accusantium et quasi architecto aut eveniet fugiat',
              body:
                'aut eligendi et molestiae voluptatum tempora officia nihil sit voluptatem aut deleniti quaerat consequatur eaque sapiente tempore commodi tenetur rerum qui quo',
            },
            {
              commentId: 6,
              id: 93,
              avatar: 'https://i.pravatar.cc/300',
              name:
                'consequatur aut ullam voluptas dolorum voluptatum sequi et',
              body:
                'sed illum quis ut aut culpa labore aspernatur illo dolorem quia vitae ut aut quo repellendus est omnis esse at est debitis',
            },
          ],
        },
      ],
    },
    {
      video: require('../../assets/videos/video2.mp4'),
      id: 1,
      comments: [
        {
          id: 15,
          likedByCreator: true,
          name: 'debitis magnam hic odit aut ullam nostrum tenetur',
          avatar: 'https://i.pravatar.cc/300',
          body:
            'nihil ut voluptates blanditiis autem odio dicta rerum quisquam saepe et est sunt quasi nemo laudantium deserunt molestias tempora quo quia',
        },
        {
          id: 16,
          avatar: 'https://i.pravatar.cc/300',
          name: 'perferendis temporibus delectus optio ea eum ratione dolorum',
          body:
            'iste ut laborum aliquid velit facere itaque quo ut soluta dicta voluptate error tempore aut et sequi reiciendis dignissimos expedita consequuntur libero sed fugiat facilis',
        },
        {
          id: 17,
          likedByCreator: true,
          name: 'eos est animi quis',
          body:
            'consequatur necessitatibus totam sed sit dolorum recusandae quae odio excepturi voluptatum harum voluptas quisquam sit ad eveniet delectus doloribus odio qui non labore',
        },
        {
          id: 18,
          avatar: 'https://i.pravatar.cc/300',
          name: 'aut et tenetur ducimus illum aut nulla ab',
          body:
            'veritatis voluptates necessitatibus maiores corrupti neque et exercitationem amet sit et ullam velit sit magnam laborum magni ut molestias',
        },
        {
          id: 19,
          avatar: 'https://i.pravatar.cc/300',
          name: 'sed impedit rerum quia et et inventore unde officiis',
          body:
            'doloribus est illo sed minima aperiam ut dignissimos accusantium tempore atque et aut molestiae magni ut accusamus voluptatem quos ut voluptates quisquam porro sed architecto ut',
        },
        {
          id: 20,
          avatar: 'https://i.pravatar.cc/300',
          name: 'molestias expedita iste aliquid voluptates',
          body:
            'qui harum consequatur fugiat et eligendi perferendis at molestiae commodi ducimus doloremque asperiores numquam qui ut sit dignissimos reprehenderit tempore',
        },
        {
          id: 21,
          avatar: 'https://i.pravatar.cc/300',
          name: 'aliquid rerum mollitia qui a consectetur eum sed',
          body:
            'deleniti aut sed molestias explicabo commodi odio ratione nesciunt voluptate doloremque est nam autem error delectus',
        },
        {
          id: 22,
          avatar: 'https://i.pravatar.cc/300',
          name: 'porro repellendus aut tempore quis hic',
          body:
            'qui ipsa animi nostrum praesentium voluptatibus odit qui non impedit cum qui nostrum aliquid fuga explicabo voluptatem fugit earum voluptas exercitationem temporibus dignissimos distinctio esse inventore reprehenderit quidem ut incidunt nihil necessitatibus rerum',
        },
        {
          id: 23,
          avatar: 'https://i.pravatar.cc/300',
          name: 'quis tempora quidem nihil iste',
          body:
            'voluptates provident repellendus iusto perspiciatis ex fugiat ut ut dolor nam aliquid et expedita voluptate sunt vitae illo rerum in quos vel eligendi enim quae fugiat est',
        },
        {
          id: 24,
          avatar: 'https://i.pravatar.cc/300',
          name: 'in tempore eos beatae est',
          body:
            'repudiandae repellat quia sequi est dolore explicabo nihil et et sit et et praesentium iste atque asperiores tenetur',
        },
      ],
    },
    {video: require('../../assets/videos/video3.mp4'), id: 2, comments: []},
    {video: require('../../assets/videos/video4.mp4'), id: 3, comments: []},
    {video: require('../../assets/videos/video5.mp4'), id: 4, comments: []},
    {video: require('../../assets/videos/video6.mp4'), id: 5, comments: []},
  ],
  activeVideo: {},
};

const submitComment = (state, action) => {
  const {activeVideo, text} = action;
  const videoIndex = state.videos.findIndex(
    video => video.id === activeVideo.id,
  );
  const comment = {
    avatar: 'https://i.pravatar.cc/300',
    body: text,
    id: 5,
    likedByCreator: false,
    name: 'Hiki',
  };
  return update(state, {
    videos: {
      [videoIndex]: {
        comments: {
          $unshift: [comment],
        },
      },
    },
    activeVideo: {
      comments: {
        $unshift: [comment],
      },
    },
  });
};

const setActiveVideo = (state, action) => {
  return update(state, {
    activeVideo: {$set: action.activeVideo},
  });
};

const videosReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_COMMENT: {
      return submitComment(state, action);
    }
    case SET_ACTIVE_VIDEO: {
      return setActiveVideo(state, action);
    }
    default:
      return state;
  }
};

export default videosReducer;
