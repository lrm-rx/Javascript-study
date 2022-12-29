// 枚举(Enum)

export {}

// const PostStatus = {
//   Draft: 0,
//   Unpublished: 1,
//   Published: 2
// }

// enum PostStatus {
//   Draft = 0,
//   Unpublished = 1,
//   Published = 2
// }

// enum PostStatus {
//   Draft = 6,
//   Unpublished, // 7
//   Published // 8
// }

// enum PostStatus {
//   Draft = 'a',
//   Unpublished = 'b',
//   Published = 'c'
// }

// 常量枚举
const enum PostStatus {
  Draft,
  Unpublished,
  Published
}

const post = {
  title: 'TS',
  content: 'TypeScript is a typed superset fo JavaScript.',
  status: PostStatus.Draft // 0/1/2
}

// PostStatus[0] => Draft