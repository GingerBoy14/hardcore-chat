import { gql } from 'apollo-server'
module.exports = gql`
    type Book {
    title: String
    author: String
}

type Query {
    books: [Book]
}
`
