import User from '../models/user'

export let login = async (ctx) => {
  let account = ctx.request.body.account
  let password = ctx.request.body.password
  let res = await User.findOne({
    account: account,
    password: password
  })
  ctx.body = {
    result: res,
    name: ctx.params.name,
    para: ctx.query
  }
}
