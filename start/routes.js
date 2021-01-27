'use strict'

const Route = use('Route')

Route.post('users', 'UserController.store')
Route.get('users', 'UserController.index')

Route.post('login', 'LoginController.store')
Route.get('logout', 'LoginController.logout')

Route.post('forgot', 'ForgotPasswordController.store')
Route.put('forgot', 'ForgotPasswordController.update')

Route.resource('games', 'GameController').apiOnly().middleware(['auth'])

Route.get('types', 'TypeController.index')

Route.put('change', 'ChangeNameAndPasswordController.update')
