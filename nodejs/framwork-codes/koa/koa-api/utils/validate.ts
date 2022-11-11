import Schema, { Values, Rules } from "async-validator"
import { Context } from "koa"


function validate<T extends Values>(ctx: Context, rules: Rules, flag: boolean = false): Promise<{ data: T, error:any | null }> {
  const validator = new Schema(rules)
  let data:any
  switch(ctx.method) {
    case "GET":
      break
    case "POST":
      data = getFormData(ctx)
      break
    case "DELETE":
      break
  }
  return validator.validate(data).then(()=>{
    return {
      data: data as T,
      error: null
    }
  }).catch(({errors})=>{
      return {
        data: {} as T,
        error: errors
      }
  })
}

function getFormData(ctx: Context) {
  return ctx.request.body
}

export default validate