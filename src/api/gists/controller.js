import { success, notFound } from '../../services/response'
import { Todo } from '.'

export const create = ({ bodymen: { body } }, res, next) => {
    if (body.private) {
        // TODO: Private Note Creation
    }
    return Todo.create(body).then(success(res, 201)).catch(next)
}

export const index = ({ querymen: { query, select, cursor } }, res, next) => {
    Todo.find({ private: false }).then(success(res)).catch(next)
}

export const show = ({ params }, res, next) =>
    Todo.findById(params.id).then(notFound(res)).then(success(res)).catch(next)

export const update = ({ bodymen: { body }, params }, res, next) => {
    Todo.findById(params.id).then(notFound(res)).then(success(res)).catch(next)
}

export const destroy = ({ params }, res, next) =>
    Todo.findById(params.id)
        .then(notFound(res))
        .then(success(res, 204))
        .catch(next)
