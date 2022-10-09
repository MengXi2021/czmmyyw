import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [{
        title: '快速消息通道',
        description: (
        <>
            C站猫猫音游窝会在站长有空闲时间的情况下，
            随时更新C站消息。
        </>
        ),
    },
    {
        title: '团购？来这里',
        description: (
        <>
            C站猫猫音游窝提供团购展示通道
            为玩家们展示正在进行团购的信息
            再也不用在群里一个一个问了！
        </>
        ),
    },
    {
        title: '你说得对',
        description: (
        <>
            你说得对，但是猫窝是一家由anteng管理的在机厅中的音游窝，坐拥9号线南苑余之城完美地理位置，隔壁自助小火锅30+，隔壁汉堡王星期三9.9好兄弟套餐，隔壁海底捞尽享6.9学生折扣，临平银泰美味萨莉亚，在这里有iidx maimaidx maimai 太鼓达人等知名音游街机，你可以在这的maimai游玩宴谱玛瓦卢，在dx游玩白茄子，在太鼓达人上游玩北琦玉，在iidx游玩daisuke以及在不可描述机台打炎上，进行飞升，直到成为杭州音游第一人，并邂逅繁樱和夕阳文雅两位美丽姐姐，猫窝现已开业，币价最低0.5r一枚，隔壁好特卖更有便宜美食及饮品，音游批可自行选择路线进行出勤，同时，逐步发觉日本街机版本的真相

        </>
        ),
    },
];

function Feature({title, description}) {
    return (
      <div className={clsx('col col--4')}>
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    );
  }

  export default function HomepageFeatures() {
    return (
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    );
  }