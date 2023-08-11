const {Cards} = require('../0models');

class CardRepository {
  // 카드 생성
  addCard = async (userId, title, content) => {
    console.log('리포지터리1');
    const addCardData = await Cards.create({
      UserId: userId,
      title: title,
      content: content,
    });
    console.log('리포지터리2');

    return addCardData;
  };

  // 카드 전제 조회
  findAllCard = async () => {
    console.log('카드 전체 조회 리포지터리 1');
    const cards = await Cards.findAll();

    console.log('카드 전체 조회 리포지터리 2');
    return cards;
  };

  // 카드 번호로 조회
  findOneCard = async cardId => {
    console.log('카드 번호로 조회 리포지터리 1');
    const foundedCard = await Cards.findOne({where: {cardId: cardId}});
    console.log('카드 번호로 조회 리포지터리 2');
    return foundedCard;
  };

  // 카드 수정
  updateCard = async (cardId, title, content) => {
    console.log('카드 수정 리포지터리 1');
    const updateCard = await Cards.update(
      {
        title: title,
        content: content,
      },
      {
        where: {cardId: cardId},
      },
    );
    console.log('카드 수정 리포지터리 2');
    return updateCard;
  };

  // 카드 순서 이동

  // 카드 삭제
  deleteCard = async cardId => {
    console.log('카드 삭제 리포지터리 1');
    await Cards.destroy({
      where: {cardId: cardId},
    });
    console.log('카드 삭제 리포지터리 2');
    return;
  };
}

module.exports = CardRepository;