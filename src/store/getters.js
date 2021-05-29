import sort from './helpers/sorter'

export default {
  hash: ({ hash }) => hash,
  cards: state => sort(state),
  rotation: ({ rotation }) => rotation,
  loading: ({ loading }) => loading
}
