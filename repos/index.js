import { usersRepo } from '~/repos/users'

export default ({ $api }, inject) => {
  inject('usersRepo', usersRepo($api))
}
