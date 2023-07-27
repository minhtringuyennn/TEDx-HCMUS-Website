import TEDx from '../Assets/Sponsors/TEDx.png';
import HCMUS from '../Assets/Sponsors/HCMUS.png';
import HSV from '../Assets/Sponsors/HSV.png';
import MPlex from '../Assets/Sponsors/MPlex.png';
import imap from '../Assets/Sponsors/imap.png';
import caztus from '../Assets/Sponsors/Caztus.png';
import mrbrown from '../Assets/Sponsors/MrBrown.png';
import TPBank from '../Assets/Sponsors/TPBank.png';
import YBox from '../Assets/Sponsors/YBox.png';
import ivolunteer from '../Assets/Sponsors/iVolunteer.png';
import esight from '../Assets/Sponsors/Esight.png';
import vina from '../Assets/Sponsors/Vina.png';
import advertising from '../Assets/Sponsors/AdvertisingVN.png';

const Data = [
  {
    type: 'Đơn vị tổ chức',
    size: 1,
    list: [
      {
        name: 'TEDx HCMUS',
        src: TEDx,
      },
      {
        name: 'Trường ĐH Khoa học tự nhiên',
        src: HCMUS,
      },
      {
        name: 'Hội sinh viên',
        src: HSV,
      },
    ],
  },
  {
    type: 'Nhà tài trợ vàng',
    size: 0.9,
    list: [
      {
        name: 'imap',
        type: 'Nhà tài trợ vàng',
        src: imap,
      },
    ],
  },
  {
    type: 'Nhà tài trợ đồng',
    size: 0.7,
    list: [
      {
        name: 'caztus ice blended',
        src: caztus,
      },
      {
        name: 'MrBrown',
        src: mrbrown,
      },
      {
        name: 'TP Bank',
        src: TPBank,
      },
    ],
  },
  {
    type: 'Đơn vị bảo trợ truyền thông',
    size: 0.4,
    list: [
      {
        name: 'YBox',
        src: YBox,
      },
      {
        name: 'ivolunteer',
        src: ivolunteer,
      },
      {
        name: 'advertising',
        src: advertising,
      },
      {
        name: 'vina',
        src: vina,
      },
      {
        name: 'esight',
        src: esight,
      },
    ],
  },
];
export default Data;
