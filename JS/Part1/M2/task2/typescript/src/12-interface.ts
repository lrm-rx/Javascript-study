// 接口 (可选成员 只读成员 动态成员)

export {}

interface Post {
  title: string
  content: string
  subtitle?: string // 可选
  readonly summary:string // 只读
}

function printPost(post:Post) {
  console.log(post.title);
  console.log(post.content);
}

printPost({
  title: 'TS',
  content: 'A javascript superset',
  summary: 'ts'
})

// 动态成员
interface Cache {
  [prop: string]: string
}

const cache: Cache = {}

cache.foo = 'value1'
cache.bar = 'value2'