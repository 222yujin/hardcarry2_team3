
#back_test
#"gihun", "chulsoo", "junha", "ryuhwan", "yongnam", "kwangsoo"

delete from back_test where type_id = 'ryuhwan';

select * from back_test;

INSERT INTO `oneto100`.`back_test`
(`type_id`,`type_name`,`type_desc`,
 `type_hashtag`,
 `type_img`,`type_like`,
 `type_dislike`,`type_attend`)
VALUES
    ('ryuhwan','은밀하게 위대하게 ‘류환’',
     '‘류환’은 북한 최고 엘리트 요원이지만, 정체를 숨기고 동네 바보이자 백수로 살아가고 있죠. 북한에서 전달되는 명령 없어도,
     원대한 사명을 안고 임무를 충실히 수행하고 있는데요. 당신 또한 꿈을 이루기 위해 꾸준히 잠재력을 갈고닦고 있군요.
      곧 당신의 잠재력을 세상이 알아봐줄거에요.',
     'hashtag for ryuhwan','img_link_for_ryuhwan','yongnam','junha',0);

INSERT INTO `oneto100`.`back_test`
(`type_id`,`type_name`,`type_desc`,
 `type_hashtag`,
 `type_img`,`type_like`,
 `type_dislike`,`type_attend`)
VALUES
    ('gihun','오징어게임 ‘기훈’',
     '‘기훈’은 실직 후 456억 원이 걸린 게임에서 우승하는 캐릭터죠.
      말도 안 되는 게임에서 그가 우승할 수 있었던 이유는 사람에 대한 믿음이었는데요.
      타인이 의심되는 상황에서도 믿음을 보여 프런트맨조차 “당신이 살아남을 줄 몰랐습니다.”라고 말하기도 하죠.
      자신과 사람에 대한 믿음으로 똘똘 뭉친 당신!
      이런 믿음과 함께라면 웃을 수 있는 날은 멀지 않았으니, 현재에 대해 너무 걱정하지 마세요.',
     'hashtag for gihun','img_link_for_gihun','junha','kwangsoo',0);

INSERT INTO `oneto100`.`back_test`
(`type_id`,`type_name`,`type_desc`,
 `type_hashtag`,
 `type_img`,`type_like`,
 `type_dislike`,`type_attend`)
VALUES
    ('yongnam','엑시트 ‘용남’',
     '자신을 보며 창피해하는 조카, 산악 동아리가 취업에 무슨 소용이냐며 구박하는 누나. 영화 엑시트에서는 ‘용남’의 자존감을 끌어내리는 사람들이 등장합니다. 하지만 자신만이 할 수 있고, 해야 하는 행동을 취해 사람들에게 큰 신뢰를 얻게 되죠. 위험에 처한 상황에서 자신의 능력을 발휘하는 진정한 능력자. 사람들에게 능력을 보여줄 날이 얼마 남지 않아 보여요!',
     'hashtag for yongnam','img_link_for_yongnam','ryuhwan','gihun',0);

INSERT INTO `oneto100`.`back_test`
(`type_id`,`type_name`,`type_desc`,
 `type_hashtag`,
 `type_img`,`type_like`,
 `type_dislike`,`type_attend`)
VALUES
    ('junha','거침없이 하이킥 ‘준하’',
     '둥글둥글 순한 성격으로 모두와 살갑게 지내는 거침없이 하이킥의 ‘준하’. 일찍 명예퇴직을 당해 의사인 아내에게 주눅이 들기는 커녕 아내를 자랑스럽게 여기죠. 시끄러운 집 안에서 최소한의 평화를 추구하는 인물인데요. 소소한 행복을 누릴 줄 알고, 매사를 긍정적으로 바라보는 당신과 닮은 것 같습니다. 이런 태도라면 원하는 걸 금방 손에 쥘 수 있을 거예요.',
     'hashtag for junha','img_link_for_junha','gihun','kwangsoo',0);

INSERT INTO `oneto100`.`back_test`
(`type_id`,`type_name`,`type_desc`,
 `type_hashtag`,
 `type_img`,`type_like`,
 `type_dislike`,`type_attend`)
VALUES
    ('kwangsoo','지붕 뚫고 하이킥 ‘광수’',
     '가수를 꿈꾸지만, 오디션을 보거나 기획사 대표님을 찾아가는 적극적인 모습을 보이지 않는 지붕 뚫고 하이킥 ‘광수’. 하지만 오락가락하는 주식판에서 386% 수익률을 챙긴 존버충으로 3개월치 밀린 방세도 내기도 하죠. 당신도 어쩌면 모르고 있는 재능이 숨겨져 있을 것 같은 느낌이 드네요. 한 번 곰곰이 생각해 보세요!',
     'hashtag for kwangsoo','img_link_for_kwangsoo','chulsoo','junha',0);

INSERT INTO `oneto100`.`back_test`
(`type_id`,`type_name`,`type_desc`,
 `type_hashtag`,
 `type_img`,`type_like`,
 `type_dislike`,`type_attend`)
VALUES
    ('chulsoo','별 그대 ‘철수’',
     '만화방에서 거의 살다시피하는 백수 ‘철수’. 만화책에 과몰입하는 모습들이 한심해 보일 수도 있지만, 사람들의 고민을 진지하게 듣고 조언을 해주는 따뜻한 캐릭터입니다. 어쩌면 당신도 현실을 도피하지만, 사실은 현실에 대한 문제를 가장 관심이 많은 사람일 수도 있습니다. 서로 문제를 같이 해결해 줄 든든한 조력자가 되어주실래요?',
     'hashtag for chulsoo','img_link_for_chulsoo','kwangsoo','ryuhwan',0);


