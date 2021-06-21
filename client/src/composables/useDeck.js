import {ref} from '@vue/composition-api'

const cardList = ref([])

const initDeck = deckData => {
  deckData.forEach(item => {
    cardList.value.push({
      value: item,
      variant: 1,
      visible: false,
      position: null,
      matched: false,
    })

    cardList.value.push({
      value: item,
      variant: 2,
      visible: true,
      position: null,
      matched: false,
    })
  })
}

const updateCardPosition = () => {
  cardList.value = cardList.value.map((card, index) => {
    return {
      ...card,
      position: index,
    }
  })
}

export default function useDeck(deckData) {
  initDeck(deckData)
  updateCardPosition()

  return {
    cardList,
  }
}
