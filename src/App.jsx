import { useState, useRef } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/css/free-mode';

import Logo from './assets/images/logo.svg';
import Burger from './assets/images/burger.svg';
import LogoPrimary from './assets/images/logoPrimary.svg';
import phoneIcon from './assets/icons/call.svg';
import telegramIcon from './assets/icons/tg.svg';
import vkontakteIcon from './assets/icons/vk.svg';
import deliveryIcon from './assets/icons/delivery.svg'
import closeIcon from './assets/icons/close.svg'

const products = [
  {
    id: 1,
    name: 'Бургеры',
    products: [
      { id: 1, name: 'Бургер с курицей', price: 520, weight: '512г', image: 'https://s3-alpha-sig.figma.com/img/6a87/919b/8dac371920a0148ebbc8f46f825349c6?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I8I4zQpi4PxpsPhqdfIJl~B95ECKx5~GIihS2Ag68KIrPYgX5gMyP45eIc0IEQkscIdcParvjzWcE~5Jl0JAARbcIW6luXczC2INOksPa8s3F9pwmC-JjtJ8Bt1LUkyQXzYLHAw8GXiTBIItMvOQYs9dDtqnLUkG3e~PPFX0X1QtJthyeLVaB1940zDAwwdAigXs~dVoKEsKFBb8hH~Uvgnq~36xn5iw53JCytb7Ta4YhwQYObz9F9f06pbMB9yF6VHo8xnLgle4g3sBqUBetE6EKZ6s1NhAOnS3RkB6L7qa-~Fkh6blH~9V3p6KcxrPgdbtcA5PjjO1sb3q2bi1Zg__' },
      { id: 2, name: 'Бургер с курицей', price: 520, weight: '512г', image: 'https://s3-alpha-sig.figma.com/img/6a87/919b/8dac371920a0148ebbc8f46f825349c6?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I8I4zQpi4PxpsPhqdfIJl~B95ECKx5~GIihS2Ag68KIrPYgX5gMyP45eIc0IEQkscIdcParvjzWcE~5Jl0JAARbcIW6luXczC2INOksPa8s3F9pwmC-JjtJ8Bt1LUkyQXzYLHAw8GXiTBIItMvOQYs9dDtqnLUkG3e~PPFX0X1QtJthyeLVaB1940zDAwwdAigXs~dVoKEsKFBb8hH~Uvgnq~36xn5iw53JCytb7Ta4YhwQYObz9F9f06pbMB9yF6VHo8xnLgle4g3sBqUBetE6EKZ6s1NhAOnS3RkB6L7qa-~Fkh6blH~9V3p6KcxrPgdbtcA5PjjO1sb3q2bi1Zg__' },
      { id: 3, name: 'Бургер с курицей', price: 520, weight: '512г', image: 'https://s3-alpha-sig.figma.com/img/6a87/919b/8dac371920a0148ebbc8f46f825349c6?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I8I4zQpi4PxpsPhqdfIJl~B95ECKx5~GIihS2Ag68KIrPYgX5gMyP45eIc0IEQkscIdcParvjzWcE~5Jl0JAARbcIW6luXczC2INOksPa8s3F9pwmC-JjtJ8Bt1LUkyQXzYLHAw8GXiTBIItMvOQYs9dDtqnLUkG3e~PPFX0X1QtJthyeLVaB1940zDAwwdAigXs~dVoKEsKFBb8hH~Uvgnq~36xn5iw53JCytb7Ta4YhwQYObz9F9f06pbMB9yF6VHo8xnLgle4g3sBqUBetE6EKZ6s1NhAOnS3RkB6L7qa-~Fkh6blH~9V3p6KcxrPgdbtcA5PjjO1sb3q2bi1Zg__' },
      { id: 4, name: 'Бургер с курицей', price: 520, weight: '512г', image: 'https://s3-alpha-sig.figma.com/img/6a87/919b/8dac371920a0148ebbc8f46f825349c6?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I8I4zQpi4PxpsPhqdfIJl~B95ECKx5~GIihS2Ag68KIrPYgX5gMyP45eIc0IEQkscIdcParvjzWcE~5Jl0JAARbcIW6luXczC2INOksPa8s3F9pwmC-JjtJ8Bt1LUkyQXzYLHAw8GXiTBIItMvOQYs9dDtqnLUkG3e~PPFX0X1QtJthyeLVaB1940zDAwwdAigXs~dVoKEsKFBb8hH~Uvgnq~36xn5iw53JCytb7Ta4YhwQYObz9F9f06pbMB9yF6VHo8xnLgle4g3sBqUBetE6EKZ6s1NhAOnS3RkB6L7qa-~Fkh6blH~9V3p6KcxrPgdbtcA5PjjO1sb3q2bi1Zg__' },
    ],
    image: 'https://s3-alpha-sig.figma.com/img/0381/f39f/a6237813cc6dfe45b8dcb0066c73d77e?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=huBMa3pHz5NUCtgrtyop6sO4ec80HGyZwOdSqQohrcxaU5SxMOQyvO4GtMxrHRJ2kJhtssNn1sQS7pdJxSoZ4g6iosULG3I5uwW4qhWDFDUVrhu5aH5A5aZy~uXg4g~-KvY1luLR10XuSqIbhbAu5rA2LuwNfeXVYqxVDhntWnJby1t8cjlD76tPKGoM9bUZf61Ad~wkj93tddX5B6cpE3z8oxyqT0ExbFheAvV-hgrffhVZZFAGxJHuaND9hYAGFzpvnLnZZ6yla-Z7C82VnOixEYDZX-Y4NeS3UpZB~cTqwMmAB2KRLNR702ydDaOa8UeAUhkt34QDY7IfDHl2kA__'
  },
  {
    id: 2,
    name: 'Закуски',
    products: [
      { id: 1, name: 'Бургер с курицей', price: 520, weight: '512г', image: 'https://s3-alpha-sig.figma.com/img/6a87/919b/8dac371920a0148ebbc8f46f825349c6?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I8I4zQpi4PxpsPhqdfIJl~B95ECKx5~GIihS2Ag68KIrPYgX5gMyP45eIc0IEQkscIdcParvjzWcE~5Jl0JAARbcIW6luXczC2INOksPa8s3F9pwmC-JjtJ8Bt1LUkyQXzYLHAw8GXiTBIItMvOQYs9dDtqnLUkG3e~PPFX0X1QtJthyeLVaB1940zDAwwdAigXs~dVoKEsKFBb8hH~Uvgnq~36xn5iw53JCytb7Ta4YhwQYObz9F9f06pbMB9yF6VHo8xnLgle4g3sBqUBetE6EKZ6s1NhAOnS3RkB6L7qa-~Fkh6blH~9V3p6KcxrPgdbtcA5PjjO1sb3q2bi1Zg__' },
      { id: 2, name: 'Бургер с курицей', price: 520, weight: '512г', image: 'https://s3-alpha-sig.figma.com/img/6a87/919b/8dac371920a0148ebbc8f46f825349c6?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I8I4zQpi4PxpsPhqdfIJl~B95ECKx5~GIihS2Ag68KIrPYgX5gMyP45eIc0IEQkscIdcParvjzWcE~5Jl0JAARbcIW6luXczC2INOksPa8s3F9pwmC-JjtJ8Bt1LUkyQXzYLHAw8GXiTBIItMvOQYs9dDtqnLUkG3e~PPFX0X1QtJthyeLVaB1940zDAwwdAigXs~dVoKEsKFBb8hH~Uvgnq~36xn5iw53JCytb7Ta4YhwQYObz9F9f06pbMB9yF6VHo8xnLgle4g3sBqUBetE6EKZ6s1NhAOnS3RkB6L7qa-~Fkh6blH~9V3p6KcxrPgdbtcA5PjjO1sb3q2bi1Zg__' },
      { id: 3, name: 'Бургер с курицей', price: 520, weight: '512г', image: 'https://s3-alpha-sig.figma.com/img/6a87/919b/8dac371920a0148ebbc8f46f825349c6?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I8I4zQpi4PxpsPhqdfIJl~B95ECKx5~GIihS2Ag68KIrPYgX5gMyP45eIc0IEQkscIdcParvjzWcE~5Jl0JAARbcIW6luXczC2INOksPa8s3F9pwmC-JjtJ8Bt1LUkyQXzYLHAw8GXiTBIItMvOQYs9dDtqnLUkG3e~PPFX0X1QtJthyeLVaB1940zDAwwdAigXs~dVoKEsKFBb8hH~Uvgnq~36xn5iw53JCytb7Ta4YhwQYObz9F9f06pbMB9yF6VHo8xnLgle4g3sBqUBetE6EKZ6s1NhAOnS3RkB6L7qa-~Fkh6blH~9V3p6KcxrPgdbtcA5PjjO1sb3q2bi1Zg__' },
      { id: 4, name: 'Бургер с курицей', price: 520, weight: '512г', image: 'https://s3-alpha-sig.figma.com/img/6a87/919b/8dac371920a0148ebbc8f46f825349c6?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I8I4zQpi4PxpsPhqdfIJl~B95ECKx5~GIihS2Ag68KIrPYgX5gMyP45eIc0IEQkscIdcParvjzWcE~5Jl0JAARbcIW6luXczC2INOksPa8s3F9pwmC-JjtJ8Bt1LUkyQXzYLHAw8GXiTBIItMvOQYs9dDtqnLUkG3e~PPFX0X1QtJthyeLVaB1940zDAwwdAigXs~dVoKEsKFBb8hH~Uvgnq~36xn5iw53JCytb7Ta4YhwQYObz9F9f06pbMB9yF6VHo8xnLgle4g3sBqUBetE6EKZ6s1NhAOnS3RkB6L7qa-~Fkh6blH~9V3p6KcxrPgdbtcA5PjjO1sb3q2bi1Zg__' },
    ],
    image: 'https://s3-alpha-sig.figma.com/img/92b8/3c53/7ab5557fc2179649f7d2731d81c17410?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=itcHqYQ4fzVBw0iQwdo8DRQ5EDvHj3s7NbPJdzMrBxqi0dH8nyAjJ~exdCDWc7owJ9e7mrSA5miwu8otd1qElikdYZYEESqC5jME9u0-GxWpQ3yFGGYuYQMBwSD~PmHt1ZcwgsW804MwxRbMF8TPryYoSCl5lymRnXGFvSIwrZ4viveTgfX7bXrA~VJMDNPnWE07bD9elCRfq3wmWKPSdPX8S2HkhaSaktjbTSoyugIjOPY-xId-9lJRou70tq8CUqirtAL5cI4zUW6EBKjQZK7ehD48DaxKiudKSw7tPfKLN3vE1Ixm~ZhItK3OUajPdcF63Irk5iDq2ftlth8gVA__'
  },
  {
    id: 3,
    name: 'Хот-доги',
    products: [
      { id: 1, name: 'Бургер с курицей', price: 520, weight: '512г', image: 'https://s3-alpha-sig.figma.com/img/6a87/919b/8dac371920a0148ebbc8f46f825349c6?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I8I4zQpi4PxpsPhqdfIJl~B95ECKx5~GIihS2Ag68KIrPYgX5gMyP45eIc0IEQkscIdcParvjzWcE~5Jl0JAARbcIW6luXczC2INOksPa8s3F9pwmC-JjtJ8Bt1LUkyQXzYLHAw8GXiTBIItMvOQYs9dDtqnLUkG3e~PPFX0X1QtJthyeLVaB1940zDAwwdAigXs~dVoKEsKFBb8hH~Uvgnq~36xn5iw53JCytb7Ta4YhwQYObz9F9f06pbMB9yF6VHo8xnLgle4g3sBqUBetE6EKZ6s1NhAOnS3RkB6L7qa-~Fkh6blH~9V3p6KcxrPgdbtcA5PjjO1sb3q2bi1Zg__' },
      { id: 2, name: 'Бургер с курицей', price: 520, weight: '512г', image: 'https://s3-alpha-sig.figma.com/img/6a87/919b/8dac371920a0148ebbc8f46f825349c6?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I8I4zQpi4PxpsPhqdfIJl~B95ECKx5~GIihS2Ag68KIrPYgX5gMyP45eIc0IEQkscIdcParvjzWcE~5Jl0JAARbcIW6luXczC2INOksPa8s3F9pwmC-JjtJ8Bt1LUkyQXzYLHAw8GXiTBIItMvOQYs9dDtqnLUkG3e~PPFX0X1QtJthyeLVaB1940zDAwwdAigXs~dVoKEsKFBb8hH~Uvgnq~36xn5iw53JCytb7Ta4YhwQYObz9F9f06pbMB9yF6VHo8xnLgle4g3sBqUBetE6EKZ6s1NhAOnS3RkB6L7qa-~Fkh6blH~9V3p6KcxrPgdbtcA5PjjO1sb3q2bi1Zg__' },
      { id: 3, name: 'Бургер с курицей', price: 520, weight: '512г', image: 'https://s3-alpha-sig.figma.com/img/6a87/919b/8dac371920a0148ebbc8f46f825349c6?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I8I4zQpi4PxpsPhqdfIJl~B95ECKx5~GIihS2Ag68KIrPYgX5gMyP45eIc0IEQkscIdcParvjzWcE~5Jl0JAARbcIW6luXczC2INOksPa8s3F9pwmC-JjtJ8Bt1LUkyQXzYLHAw8GXiTBIItMvOQYs9dDtqnLUkG3e~PPFX0X1QtJthyeLVaB1940zDAwwdAigXs~dVoKEsKFBb8hH~Uvgnq~36xn5iw53JCytb7Ta4YhwQYObz9F9f06pbMB9yF6VHo8xnLgle4g3sBqUBetE6EKZ6s1NhAOnS3RkB6L7qa-~Fkh6blH~9V3p6KcxrPgdbtcA5PjjO1sb3q2bi1Zg__' },
      { id: 4, name: 'Бургер с курицей', price: 520, weight: '512г', image: 'https://s3-alpha-sig.figma.com/img/6a87/919b/8dac371920a0148ebbc8f46f825349c6?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I8I4zQpi4PxpsPhqdfIJl~B95ECKx5~GIihS2Ag68KIrPYgX5gMyP45eIc0IEQkscIdcParvjzWcE~5Jl0JAARbcIW6luXczC2INOksPa8s3F9pwmC-JjtJ8Bt1LUkyQXzYLHAw8GXiTBIItMvOQYs9dDtqnLUkG3e~PPFX0X1QtJthyeLVaB1940zDAwwdAigXs~dVoKEsKFBb8hH~Uvgnq~36xn5iw53JCytb7Ta4YhwQYObz9F9f06pbMB9yF6VHo8xnLgle4g3sBqUBetE6EKZ6s1NhAOnS3RkB6L7qa-~Fkh6blH~9V3p6KcxrPgdbtcA5PjjO1sb3q2bi1Zg__' },
    ],
    image: 'https://s3-alpha-sig.figma.com/img/b42c/bf1c/f6248c1ee1b1fe2667d6146ce4d46538?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CNzQcmhP1FClMRCh4OpBGqHzq-yKUR5W~Pynv0rjXjK4ZtHcynXwIzJvpJO~HzHNUSlvJhyQqo80sk96vS2pqNIherN46N7C74LSW~WagINgCslqE5Urcmp8q20wm4nZo5tNecJIN2BjaTQwm~Bv0d5Vc2TaYA0nDizEhTX1O~uYt6z18NwYrjTUy4YUFlYMIGjw4c~HBiV7nZQ6y3n2bHFDVuUPw04~Q-ZUNEWLmKJIFQXNGDcMdF1gACd5OUH1pckuRmNEDOym1nCjb3~7x3NxEjaO5R89GlkqHEF0eWpLY-FBDfgEaRWQsAsqaoutv0YAkXwtp-jcgQz8yK6MdQ__'
  },
  {
    id: 4,
    name: 'Комбо',
    products: [
      { id: 1, name: 'Бургер с курицей', price: 520, weight: '512г', image: 'https://s3-alpha-sig.figma.com/img/6a87/919b/8dac371920a0148ebbc8f46f825349c6?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I8I4zQpi4PxpsPhqdfIJl~B95ECKx5~GIihS2Ag68KIrPYgX5gMyP45eIc0IEQkscIdcParvjzWcE~5Jl0JAARbcIW6luXczC2INOksPa8s3F9pwmC-JjtJ8Bt1LUkyQXzYLHAw8GXiTBIItMvOQYs9dDtqnLUkG3e~PPFX0X1QtJthyeLVaB1940zDAwwdAigXs~dVoKEsKFBb8hH~Uvgnq~36xn5iw53JCytb7Ta4YhwQYObz9F9f06pbMB9yF6VHo8xnLgle4g3sBqUBetE6EKZ6s1NhAOnS3RkB6L7qa-~Fkh6blH~9V3p6KcxrPgdbtcA5PjjO1sb3q2bi1Zg__' },
      { id: 2, name: 'Бургер с курицей', price: 520, weight: '512г', image: 'https://s3-alpha-sig.figma.com/img/6a87/919b/8dac371920a0148ebbc8f46f825349c6?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I8I4zQpi4PxpsPhqdfIJl~B95ECKx5~GIihS2Ag68KIrPYgX5gMyP45eIc0IEQkscIdcParvjzWcE~5Jl0JAARbcIW6luXczC2INOksPa8s3F9pwmC-JjtJ8Bt1LUkyQXzYLHAw8GXiTBIItMvOQYs9dDtqnLUkG3e~PPFX0X1QtJthyeLVaB1940zDAwwdAigXs~dVoKEsKFBb8hH~Uvgnq~36xn5iw53JCytb7Ta4YhwQYObz9F9f06pbMB9yF6VHo8xnLgle4g3sBqUBetE6EKZ6s1NhAOnS3RkB6L7qa-~Fkh6blH~9V3p6KcxrPgdbtcA5PjjO1sb3q2bi1Zg__' },
      { id: 3, name: 'Бургер с курицей', price: 520, weight: '512г', image: 'https://s3-alpha-sig.figma.com/img/6a87/919b/8dac371920a0148ebbc8f46f825349c6?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I8I4zQpi4PxpsPhqdfIJl~B95ECKx5~GIihS2Ag68KIrPYgX5gMyP45eIc0IEQkscIdcParvjzWcE~5Jl0JAARbcIW6luXczC2INOksPa8s3F9pwmC-JjtJ8Bt1LUkyQXzYLHAw8GXiTBIItMvOQYs9dDtqnLUkG3e~PPFX0X1QtJthyeLVaB1940zDAwwdAigXs~dVoKEsKFBb8hH~Uvgnq~36xn5iw53JCytb7Ta4YhwQYObz9F9f06pbMB9yF6VHo8xnLgle4g3sBqUBetE6EKZ6s1NhAOnS3RkB6L7qa-~Fkh6blH~9V3p6KcxrPgdbtcA5PjjO1sb3q2bi1Zg__' },
      { id: 4, name: 'Бургер с курицей', price: 520, weight: '512г', image: 'https://s3-alpha-sig.figma.com/img/6a87/919b/8dac371920a0148ebbc8f46f825349c6?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I8I4zQpi4PxpsPhqdfIJl~B95ECKx5~GIihS2Ag68KIrPYgX5gMyP45eIc0IEQkscIdcParvjzWcE~5Jl0JAARbcIW6luXczC2INOksPa8s3F9pwmC-JjtJ8Bt1LUkyQXzYLHAw8GXiTBIItMvOQYs9dDtqnLUkG3e~PPFX0X1QtJthyeLVaB1940zDAwwdAigXs~dVoKEsKFBb8hH~Uvgnq~36xn5iw53JCytb7Ta4YhwQYObz9F9f06pbMB9yF6VHo8xnLgle4g3sBqUBetE6EKZ6s1NhAOnS3RkB6L7qa-~Fkh6blH~9V3p6KcxrPgdbtcA5PjjO1sb3q2bi1Zg__' },
    ],
    image: 'https://s3-alpha-sig.figma.com/img/df73/276e/1adf3d7ec3e179fbe7b0da6296ce38c7?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G5TE2SDgluFZVV6Y2b-146mnARTD6dBYllbKtJiH-wZg4w6pPSus5KsVuXVTH-1eFsHhXfjxaMpgxw~agv0SW~wwyX5yj4RSVoT9tXsv9jgHupbLN3QhvE39fgYZ3e1COd~vliDJZkYIW58ZBd4bO5pWfY-NiaVF4nKm7MiMfRWD3i3wIYVe4xtpgm4oA2l~mOOW8t1WeL88vThJpignaKL1UxgbWgt20YXPeORfUtGtUDwF6eIqqF5tpKQS24jWbM-NcV4fVgzc1o8yWxJjvdG6Hm4qt0n-N3thVrD3pp95Z-jgRBa2wuNggPq5vsKwGJjr9FIp00P1wn-ArAE6uQ__'
  },
  {
    id: 5,
    name: 'Шаурма',
    products: [
      { id: 1, name: 'Бургер с курицей', price: 520, weight: '512г', image: 'https://s3-alpha-sig.figma.com/img/6a87/919b/8dac371920a0148ebbc8f46f825349c6?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I8I4zQpi4PxpsPhqdfIJl~B95ECKx5~GIihS2Ag68KIrPYgX5gMyP45eIc0IEQkscIdcParvjzWcE~5Jl0JAARbcIW6luXczC2INOksPa8s3F9pwmC-JjtJ8Bt1LUkyQXzYLHAw8GXiTBIItMvOQYs9dDtqnLUkG3e~PPFX0X1QtJthyeLVaB1940zDAwwdAigXs~dVoKEsKFBb8hH~Uvgnq~36xn5iw53JCytb7Ta4YhwQYObz9F9f06pbMB9yF6VHo8xnLgle4g3sBqUBetE6EKZ6s1NhAOnS3RkB6L7qa-~Fkh6blH~9V3p6KcxrPgdbtcA5PjjO1sb3q2bi1Zg__' },
      { id: 2, name: 'Бургер с курицей', price: 520, weight: '512г', image: 'https://s3-alpha-sig.figma.com/img/6a87/919b/8dac371920a0148ebbc8f46f825349c6?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I8I4zQpi4PxpsPhqdfIJl~B95ECKx5~GIihS2Ag68KIrPYgX5gMyP45eIc0IEQkscIdcParvjzWcE~5Jl0JAARbcIW6luXczC2INOksPa8s3F9pwmC-JjtJ8Bt1LUkyQXzYLHAw8GXiTBIItMvOQYs9dDtqnLUkG3e~PPFX0X1QtJthyeLVaB1940zDAwwdAigXs~dVoKEsKFBb8hH~Uvgnq~36xn5iw53JCytb7Ta4YhwQYObz9F9f06pbMB9yF6VHo8xnLgle4g3sBqUBetE6EKZ6s1NhAOnS3RkB6L7qa-~Fkh6blH~9V3p6KcxrPgdbtcA5PjjO1sb3q2bi1Zg__' },
      { id: 3, name: 'Бургер с курицей', price: 520, weight: '512г', image: 'https://s3-alpha-sig.figma.com/img/6a87/919b/8dac371920a0148ebbc8f46f825349c6?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I8I4zQpi4PxpsPhqdfIJl~B95ECKx5~GIihS2Ag68KIrPYgX5gMyP45eIc0IEQkscIdcParvjzWcE~5Jl0JAARbcIW6luXczC2INOksPa8s3F9pwmC-JjtJ8Bt1LUkyQXzYLHAw8GXiTBIItMvOQYs9dDtqnLUkG3e~PPFX0X1QtJthyeLVaB1940zDAwwdAigXs~dVoKEsKFBb8hH~Uvgnq~36xn5iw53JCytb7Ta4YhwQYObz9F9f06pbMB9yF6VHo8xnLgle4g3sBqUBetE6EKZ6s1NhAOnS3RkB6L7qa-~Fkh6blH~9V3p6KcxrPgdbtcA5PjjO1sb3q2bi1Zg__' },

      { id: 4, name: 'Бургер с курицей', price: 520, weight: '512г', image: 'https://s3-alpha-sig.figma.com/img/6a87/919b/8dac371920a0148ebbc8f46f825349c6?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I8I4zQpi4PxpsPhqdfIJl~B95ECKx5~GIihS2Ag68KIrPYgX5gMyP45eIc0IEQkscIdcParvjzWcE~5Jl0JAARbcIW6luXczC2INOksPa8s3F9pwmC-JjtJ8Bt1LUkyQXzYLHAw8GXiTBIItMvOQYs9dDtqnLUkG3e~PPFX0X1QtJthyeLVaB1940zDAwwdAigXs~dVoKEsKFBb8hH~Uvgnq~36xn5iw53JCytb7Ta4YhwQYObz9F9f06pbMB9yF6VHo8xnLgle4g3sBqUBetE6EKZ6s1NhAOnS3RkB6L7qa-~Fkh6blH~9V3p6KcxrPgdbtcA5PjjO1sb3q2bi1Zg__' },
      { id: 5, name: 'Бургер с курицей', price: 520, weight: '512г', image: 'https://s3-alpha-sig.figma.com/img/6a87/919b/8dac371920a0148ebbc8f46f825349c6?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I8I4zQpi4PxpsPhqdfIJl~B95ECKx5~GIihS2Ag68KIrPYgX5gMyP45eIc0IEQkscIdcParvjzWcE~5Jl0JAARbcIW6luXczC2INOksPa8s3F9pwmC-JjtJ8Bt1LUkyQXzYLHAw8GXiTBIItMvOQYs9dDtqnLUkG3e~PPFX0X1QtJthyeLVaB1940zDAwwdAigXs~dVoKEsKFBb8hH~Uvgnq~36xn5iw53JCytb7Ta4YhwQYObz9F9f06pbMB9yF6VHo8xnLgle4g3sBqUBetE6EKZ6s1NhAOnS3RkB6L7qa-~Fkh6blH~9V3p6KcxrPgdbtcA5PjjO1sb3q2bi1Zg__' },
      { id: 6, name: 'Бургер с курицей', price: 520, weight: '512г', image: 'https://s3-alpha-sig.figma.com/img/6a87/919b/8dac371920a0148ebbc8f46f825349c6?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I8I4zQpi4PxpsPhqdfIJl~B95ECKx5~GIihS2Ag68KIrPYgX5gMyP45eIc0IEQkscIdcParvjzWcE~5Jl0JAARbcIW6luXczC2INOksPa8s3F9pwmC-JjtJ8Bt1LUkyQXzYLHAw8GXiTBIItMvOQYs9dDtqnLUkG3e~PPFX0X1QtJthyeLVaB1940zDAwwdAigXs~dVoKEsKFBb8hH~Uvgnq~36xn5iw53JCytb7Ta4YhwQYObz9F9f06pbMB9yF6VHo8xnLgle4g3sBqUBetE6EKZ6s1NhAOnS3RkB6L7qa-~Fkh6blH~9V3p6KcxrPgdbtcA5PjjO1sb3q2bi1Zg__' },
      { id: 7, name: 'Бургер с курицей', price: 520, weight: '512г', image: 'https://s3-alpha-sig.figma.com/img/6a87/919b/8dac371920a0148ebbc8f46f825349c6?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I8I4zQpi4PxpsPhqdfIJl~B95ECKx5~GIihS2Ag68KIrPYgX5gMyP45eIc0IEQkscIdcParvjzWcE~5Jl0JAARbcIW6luXczC2INOksPa8s3F9pwmC-JjtJ8Bt1LUkyQXzYLHAw8GXiTBIItMvOQYs9dDtqnLUkG3e~PPFX0X1QtJthyeLVaB1940zDAwwdAigXs~dVoKEsKFBb8hH~Uvgnq~36xn5iw53JCytb7Ta4YhwQYObz9F9f06pbMB9yF6VHo8xnLgle4g3sBqUBetE6EKZ6s1NhAOnS3RkB6L7qa-~Fkh6blH~9V3p6KcxrPgdbtcA5PjjO1sb3q2bi1Zg__' },
      { id: 8, name: 'Бургер с курицей', price: 520, weight: '512г', image: 'https://s3-alpha-sig.figma.com/img/6a87/919b/8dac371920a0148ebbc8f46f825349c6?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I8I4zQpi4PxpsPhqdfIJl~B95ECKx5~GIihS2Ag68KIrPYgX5gMyP45eIc0IEQkscIdcParvjzWcE~5Jl0JAARbcIW6luXczC2INOksPa8s3F9pwmC-JjtJ8Bt1LUkyQXzYLHAw8GXiTBIItMvOQYs9dDtqnLUkG3e~PPFX0X1QtJthyeLVaB1940zDAwwdAigXs~dVoKEsKFBb8hH~Uvgnq~36xn5iw53JCytb7Ta4YhwQYObz9F9f06pbMB9yF6VHo8xnLgle4g3sBqUBetE6EKZ6s1NhAOnS3RkB6L7qa-~Fkh6blH~9V3p6KcxrPgdbtcA5PjjO1sb3q2bi1Zg__' },
    ],
    image: 'https://s3-alpha-sig.figma.com/img/aad2/7139/e74b87f3ec66400fb1140b2b5d83dc12?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Qk4hfEOEAzKWIDzrtW6fB6MMSvsgd9pZL2Ta7f56OIJhM5fikWY3C8gzRrjoSTGbAhvjmX8p-NC2Zncfpnyh1EBJmUhhrryGJHmvWbB-vBtEirRYXMD9W2JCVHXRntf4UOsRqzJwJCurPsz3K6dku0WRqy5BM3XHRsBlhtjl50oG8MiXe64wlydtuuhipOmeYY2ffZvH5koyhie7l3J1qMKKbaObPFA1YIfAew6rfHal3gPyEUzfLYtE1BxnoD~l3xZHlZGNuSGrhKpuajcOd8kElZCJ~iFj10Yi0UCEGcXXCbBm2BioKPUBIBMZoZIrLOIZhWuNwbukUxm3IWgTzQ__'
  },
  {
    id: 6,
    name: 'Пицца',
    products: [
      { id: 1, name: 'Бургер с курицей', price: 520, weight: '512г', image: 'https://s3-alpha-sig.figma.com/img/6a87/919b/8dac371920a0148ebbc8f46f825349c6?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I8I4zQpi4PxpsPhqdfIJl~B95ECKx5~GIihS2Ag68KIrPYgX5gMyP45eIc0IEQkscIdcParvjzWcE~5Jl0JAARbcIW6luXczC2INOksPa8s3F9pwmC-JjtJ8Bt1LUkyQXzYLHAw8GXiTBIItMvOQYs9dDtqnLUkG3e~PPFX0X1QtJthyeLVaB1940zDAwwdAigXs~dVoKEsKFBb8hH~Uvgnq~36xn5iw53JCytb7Ta4YhwQYObz9F9f06pbMB9yF6VHo8xnLgle4g3sBqUBetE6EKZ6s1NhAOnS3RkB6L7qa-~Fkh6blH~9V3p6KcxrPgdbtcA5PjjO1sb3q2bi1Zg__' },
      { id: 2, name: 'Бургер с курицей', price: 520, weight: '512г', image: 'https://s3-alpha-sig.figma.com/img/6a87/919b/8dac371920a0148ebbc8f46f825349c6?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I8I4zQpi4PxpsPhqdfIJl~B95ECKx5~GIihS2Ag68KIrPYgX5gMyP45eIc0IEQkscIdcParvjzWcE~5Jl0JAARbcIW6luXczC2INOksPa8s3F9pwmC-JjtJ8Bt1LUkyQXzYLHAw8GXiTBIItMvOQYs9dDtqnLUkG3e~PPFX0X1QtJthyeLVaB1940zDAwwdAigXs~dVoKEsKFBb8hH~Uvgnq~36xn5iw53JCytb7Ta4YhwQYObz9F9f06pbMB9yF6VHo8xnLgle4g3sBqUBetE6EKZ6s1NhAOnS3RkB6L7qa-~Fkh6blH~9V3p6KcxrPgdbtcA5PjjO1sb3q2bi1Zg__' },
      { id: 3, name: 'Бургер с курицей', price: 520, weight: '512г', image: 'https://s3-alpha-sig.figma.com/img/6a87/919b/8dac371920a0148ebbc8f46f825349c6?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I8I4zQpi4PxpsPhqdfIJl~B95ECKx5~GIihS2Ag68KIrPYgX5gMyP45eIc0IEQkscIdcParvjzWcE~5Jl0JAARbcIW6luXczC2INOksPa8s3F9pwmC-JjtJ8Bt1LUkyQXzYLHAw8GXiTBIItMvOQYs9dDtqnLUkG3e~PPFX0X1QtJthyeLVaB1940zDAwwdAigXs~dVoKEsKFBb8hH~Uvgnq~36xn5iw53JCytb7Ta4YhwQYObz9F9f06pbMB9yF6VHo8xnLgle4g3sBqUBetE6EKZ6s1NhAOnS3RkB6L7qa-~Fkh6blH~9V3p6KcxrPgdbtcA5PjjO1sb3q2bi1Zg__' },
      { id: 4, name: 'Бургер с курицей', price: 520, weight: '512г', image: 'https://s3-alpha-sig.figma.com/img/6a87/919b/8dac371920a0148ebbc8f46f825349c6?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I8I4zQpi4PxpsPhqdfIJl~B95ECKx5~GIihS2Ag68KIrPYgX5gMyP45eIc0IEQkscIdcParvjzWcE~5Jl0JAARbcIW6luXczC2INOksPa8s3F9pwmC-JjtJ8Bt1LUkyQXzYLHAw8GXiTBIItMvOQYs9dDtqnLUkG3e~PPFX0X1QtJthyeLVaB1940zDAwwdAigXs~dVoKEsKFBb8hH~Uvgnq~36xn5iw53JCytb7Ta4YhwQYObz9F9f06pbMB9yF6VHo8xnLgle4g3sBqUBetE6EKZ6s1NhAOnS3RkB6L7qa-~Fkh6blH~9V3p6KcxrPgdbtcA5PjjO1sb3q2bi1Zg__' },
    ],
    image: 'https://s3-alpha-sig.figma.com/img/4bb5/b0eb/9ec5a254ece55efa31af986f3ab9ac23?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b4a7oQ-Ge3ZDGAiOrdv8sWnS3cc2fcIvDFR0hJxM1IbCeJbPydcBG-mmT6b2MabyB41O-xRtwAZsQ2KXcWaKhEJYBxh2juKw78TzY6Spz3I5zX~G5yGuQljkCwxW-jEbTCPBAuiuLPaAUdfM09IWj~PsXy1iaJ975UJScDTll6~Y~g4t-ngGTJfJPPTbaeIGdkeFFqA6-WHL3ANazraQVH9lKfhFwOjjsZl2uSDf7kDV2DnVmmbK4wypkC0HjBwH~lf22cxY78k5cIzX9lSSSMhyQ2sOjLF3DCcHgkmg~a5tPYX8UrLfU0TSfDS5dReZVerR5VHfSKzOdiV383uiBg__'
  },
  {
    id: 7,
    name: 'Вок',
    products: [
      { id: 1, name: 'Бургер с курицей', price: 520, weight: '512г', image: 'https://s3-alpha-sig.figma.com/img/6a87/919b/8dac371920a0148ebbc8f46f825349c6?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I8I4zQpi4PxpsPhqdfIJl~B95ECKx5~GIihS2Ag68KIrPYgX5gMyP45eIc0IEQkscIdcParvjzWcE~5Jl0JAARbcIW6luXczC2INOksPa8s3F9pwmC-JjtJ8Bt1LUkyQXzYLHAw8GXiTBIItMvOQYs9dDtqnLUkG3e~PPFX0X1QtJthyeLVaB1940zDAwwdAigXs~dVoKEsKFBb8hH~Uvgnq~36xn5iw53JCytb7Ta4YhwQYObz9F9f06pbMB9yF6VHo8xnLgle4g3sBqUBetE6EKZ6s1NhAOnS3RkB6L7qa-~Fkh6blH~9V3p6KcxrPgdbtcA5PjjO1sb3q2bi1Zg__' },
      { id: 2, name: 'Бургер с курицей', price: 520, weight: '512г', image: 'https://s3-alpha-sig.figma.com/img/6a87/919b/8dac371920a0148ebbc8f46f825349c6?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I8I4zQpi4PxpsPhqdfIJl~B95ECKx5~GIihS2Ag68KIrPYgX5gMyP45eIc0IEQkscIdcParvjzWcE~5Jl0JAARbcIW6luXczC2INOksPa8s3F9pwmC-JjtJ8Bt1LUkyQXzYLHAw8GXiTBIItMvOQYs9dDtqnLUkG3e~PPFX0X1QtJthyeLVaB1940zDAwwdAigXs~dVoKEsKFBb8hH~Uvgnq~36xn5iw53JCytb7Ta4YhwQYObz9F9f06pbMB9yF6VHo8xnLgle4g3sBqUBetE6EKZ6s1NhAOnS3RkB6L7qa-~Fkh6blH~9V3p6KcxrPgdbtcA5PjjO1sb3q2bi1Zg__' },
      { id: 3, name: 'Бургер с курицей', price: 520, weight: '512г', image: 'https://s3-alpha-sig.figma.com/img/6a87/919b/8dac371920a0148ebbc8f46f825349c6?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I8I4zQpi4PxpsPhqdfIJl~B95ECKx5~GIihS2Ag68KIrPYgX5gMyP45eIc0IEQkscIdcParvjzWcE~5Jl0JAARbcIW6luXczC2INOksPa8s3F9pwmC-JjtJ8Bt1LUkyQXzYLHAw8GXiTBIItMvOQYs9dDtqnLUkG3e~PPFX0X1QtJthyeLVaB1940zDAwwdAigXs~dVoKEsKFBb8hH~Uvgnq~36xn5iw53JCytb7Ta4YhwQYObz9F9f06pbMB9yF6VHo8xnLgle4g3sBqUBetE6EKZ6s1NhAOnS3RkB6L7qa-~Fkh6blH~9V3p6KcxrPgdbtcA5PjjO1sb3q2bi1Zg__' },
      { id: 4, name: 'Бургер с курицей', price: 520, weight: '512г', image: 'https://s3-alpha-sig.figma.com/img/6a87/919b/8dac371920a0148ebbc8f46f825349c6?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I8I4zQpi4PxpsPhqdfIJl~B95ECKx5~GIihS2Ag68KIrPYgX5gMyP45eIc0IEQkscIdcParvjzWcE~5Jl0JAARbcIW6luXczC2INOksPa8s3F9pwmC-JjtJ8Bt1LUkyQXzYLHAw8GXiTBIItMvOQYs9dDtqnLUkG3e~PPFX0X1QtJthyeLVaB1940zDAwwdAigXs~dVoKEsKFBb8hH~Uvgnq~36xn5iw53JCytb7Ta4YhwQYObz9F9f06pbMB9yF6VHo8xnLgle4g3sBqUBetE6EKZ6s1NhAOnS3RkB6L7qa-~Fkh6blH~9V3p6KcxrPgdbtcA5PjjO1sb3q2bi1Zg__' },
    ],
    image: 'https://s3-alpha-sig.figma.com/img/f60d/fce7/c3673197e6375d8baf5a375d1f23cb09?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GAXNgp5vMFUBSP4Iu3YyUPr-6ZOzcz-YsYio~xmrK-abV2~wpDsf0VioVuw4aFuzljwnMAJCgbeEqRdioZcbq3xfjTcfyK78bziEAYeMI5mLFus3Sqn-qr3U5gswOIyTKyRFp~3AoZww8yLO6op2PgrVOzhfvNFnQ-wtWi66HZCjd18hGm-yyg5usheul5F90zHmt6Af4yI0Nq-atUXxDqo~gmMBULTsShKIYzck03d2XkTRz77F5sCc0ykQzae9Ith0l5DxdCfCLhnC58wtBqBYD1EnLxM~HWlhMIYPVHNxrsxFvWr3iA6r59EDPxff-bw0MpQdBmIAlECnlCBmNA__'
  },
  {
    id: 8,
    name: 'Десерты',
    products: [
      { id: 1, name: 'Бургер с курицей', price: 520, weight: '512г', image: 'https://s3-alpha-sig.figma.com/img/6a87/919b/8dac371920a0148ebbc8f46f825349c6?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I8I4zQpi4PxpsPhqdfIJl~B95ECKx5~GIihS2Ag68KIrPYgX5gMyP45eIc0IEQkscIdcParvjzWcE~5Jl0JAARbcIW6luXczC2INOksPa8s3F9pwmC-JjtJ8Bt1LUkyQXzYLHAw8GXiTBIItMvOQYs9dDtqnLUkG3e~PPFX0X1QtJthyeLVaB1940zDAwwdAigXs~dVoKEsKFBb8hH~Uvgnq~36xn5iw53JCytb7Ta4YhwQYObz9F9f06pbMB9yF6VHo8xnLgle4g3sBqUBetE6EKZ6s1NhAOnS3RkB6L7qa-~Fkh6blH~9V3p6KcxrPgdbtcA5PjjO1sb3q2bi1Zg__' },
      { id: 2, name: 'Бургер с курицей', price: 520, weight: '512г', image: 'https://s3-alpha-sig.figma.com/img/6a87/919b/8dac371920a0148ebbc8f46f825349c6?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I8I4zQpi4PxpsPhqdfIJl~B95ECKx5~GIihS2Ag68KIrPYgX5gMyP45eIc0IEQkscIdcParvjzWcE~5Jl0JAARbcIW6luXczC2INOksPa8s3F9pwmC-JjtJ8Bt1LUkyQXzYLHAw8GXiTBIItMvOQYs9dDtqnLUkG3e~PPFX0X1QtJthyeLVaB1940zDAwwdAigXs~dVoKEsKFBb8hH~Uvgnq~36xn5iw53JCytb7Ta4YhwQYObz9F9f06pbMB9yF6VHo8xnLgle4g3sBqUBetE6EKZ6s1NhAOnS3RkB6L7qa-~Fkh6blH~9V3p6KcxrPgdbtcA5PjjO1sb3q2bi1Zg__' },
      { id: 3, name: 'Бургер с курицей', price: 520, weight: '512г', image: 'https://s3-alpha-sig.figma.com/img/6a87/919b/8dac371920a0148ebbc8f46f825349c6?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I8I4zQpi4PxpsPhqdfIJl~B95ECKx5~GIihS2Ag68KIrPYgX5gMyP45eIc0IEQkscIdcParvjzWcE~5Jl0JAARbcIW6luXczC2INOksPa8s3F9pwmC-JjtJ8Bt1LUkyQXzYLHAw8GXiTBIItMvOQYs9dDtqnLUkG3e~PPFX0X1QtJthyeLVaB1940zDAwwdAigXs~dVoKEsKFBb8hH~Uvgnq~36xn5iw53JCytb7Ta4YhwQYObz9F9f06pbMB9yF6VHo8xnLgle4g3sBqUBetE6EKZ6s1NhAOnS3RkB6L7qa-~Fkh6blH~9V3p6KcxrPgdbtcA5PjjO1sb3q2bi1Zg__' },
    ],
    image: 'https://s3-alpha-sig.figma.com/img/3543/15ae/6d12d38b33f21030decc1f3fe3ccafaf?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p~o1rFLLr1Pb23YOzl92of~a23AKK3cpU6yFdW0VJmD9Ks2uvRuikOUdSyyuGxGDp7gbY7p6iwdUllmlnt2SDDenWPl6ELMj8nyTcAxiaFiExvL8oSY1GaPwVM90WybV0g1Kt9-kFraAKJ73hjUqZ-15HmBs5lg5N9O0uN7SpFLFPeALFPxdS4Me~oPcofEhQKA6DPjNDUV0gyip32of-h7zO2nlB4UIG-9jAuHruhvGleEa86YCKJrGVO9Tkz3JFmvOTaSlPp2Y3ddIgq3VKPKvNKPA59ECy-aFc-vIW~spEZP~PDDT7MJrO~zQAe~s9C~Goi6Ay8VA6IdfhFhlQA__'
  },
  {
    id: 9,
    name: 'Соусы',
    products: [
      { id: 1, name: 'Бургер с курицей', price: 520, weight: '512г', image: 'https://s3-alpha-sig.figma.com/img/6a87/919b/8dac371920a0148ebbc8f46f825349c6?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I8I4zQpi4PxpsPhqdfIJl~B95ECKx5~GIihS2Ag68KIrPYgX5gMyP45eIc0IEQkscIdcParvjzWcE~5Jl0JAARbcIW6luXczC2INOksPa8s3F9pwmC-JjtJ8Bt1LUkyQXzYLHAw8GXiTBIItMvOQYs9dDtqnLUkG3e~PPFX0X1QtJthyeLVaB1940zDAwwdAigXs~dVoKEsKFBb8hH~Uvgnq~36xn5iw53JCytb7Ta4YhwQYObz9F9f06pbMB9yF6VHo8xnLgle4g3sBqUBetE6EKZ6s1NhAOnS3RkB6L7qa-~Fkh6blH~9V3p6KcxrPgdbtcA5PjjO1sb3q2bi1Zg__' },
      { id: 2, name: 'Бургер с курицей', price: 520, weight: '512г', image: 'https://s3-alpha-sig.figma.com/img/6a87/919b/8dac371920a0148ebbc8f46f825349c6?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I8I4zQpi4PxpsPhqdfIJl~B95ECKx5~GIihS2Ag68KIrPYgX5gMyP45eIc0IEQkscIdcParvjzWcE~5Jl0JAARbcIW6luXczC2INOksPa8s3F9pwmC-JjtJ8Bt1LUkyQXzYLHAw8GXiTBIItMvOQYs9dDtqnLUkG3e~PPFX0X1QtJthyeLVaB1940zDAwwdAigXs~dVoKEsKFBb8hH~Uvgnq~36xn5iw53JCytb7Ta4YhwQYObz9F9f06pbMB9yF6VHo8xnLgle4g3sBqUBetE6EKZ6s1NhAOnS3RkB6L7qa-~Fkh6blH~9V3p6KcxrPgdbtcA5PjjO1sb3q2bi1Zg__' },
      { id: 3, name: 'Бургер с курицей', price: 520, weight: '512г', image: 'https://s3-alpha-sig.figma.com/img/6a87/919b/8dac371920a0148ebbc8f46f825349c6?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I8I4zQpi4PxpsPhqdfIJl~B95ECKx5~GIihS2Ag68KIrPYgX5gMyP45eIc0IEQkscIdcParvjzWcE~5Jl0JAARbcIW6luXczC2INOksPa8s3F9pwmC-JjtJ8Bt1LUkyQXzYLHAw8GXiTBIItMvOQYs9dDtqnLUkG3e~PPFX0X1QtJthyeLVaB1940zDAwwdAigXs~dVoKEsKFBb8hH~Uvgnq~36xn5iw53JCytb7Ta4YhwQYObz9F9f06pbMB9yF6VHo8xnLgle4g3sBqUBetE6EKZ6s1NhAOnS3RkB6L7qa-~Fkh6blH~9V3p6KcxrPgdbtcA5PjjO1sb3q2bi1Zg__' },
      { id: 4, name: 'Бургер с курицей', price: 520, weight: '512г', image: 'https://s3-alpha-sig.figma.com/img/6a87/919b/8dac371920a0148ebbc8f46f825349c6?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I8I4zQpi4PxpsPhqdfIJl~B95ECKx5~GIihS2Ag68KIrPYgX5gMyP45eIc0IEQkscIdcParvjzWcE~5Jl0JAARbcIW6luXczC2INOksPa8s3F9pwmC-JjtJ8Bt1LUkyQXzYLHAw8GXiTBIItMvOQYs9dDtqnLUkG3e~PPFX0X1QtJthyeLVaB1940zDAwwdAigXs~dVoKEsKFBb8hH~Uvgnq~36xn5iw53JCytb7Ta4YhwQYObz9F9f06pbMB9yF6VHo8xnLgle4g3sBqUBetE6EKZ6s1NhAOnS3RkB6L7qa-~Fkh6blH~9V3p6KcxrPgdbtcA5PjjO1sb3q2bi1Zg__' },
    ],
    image: 'https://s3-alpha-sig.figma.com/img/7b10/ee7c/622fc61052ca5b4e699a1f2a8e2b36ab?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pHS4XngqgUSKwQKWLKdHuzytmU9B6lWNT-aoX3Korqf2WDX4BJDmsvTMuGJfRW0oIHU5gYaQVIPfusagXusfxXuw254m7lN7A48mp5fX2k8w2RODJeZcGKbAN9~V-axzTPLqnLxAQw1Qn2ljYyvj0CPpbIZIz6OFf65g2kRpp3KeUPawcxG82OZqxRKDz8jxRmrBwM1ySwiY-O-U5hLp9-hoH5WnsUIAu8RbhjqfOeG468VNsJO3PTxqBSblRV70io5qibTXbS4Di0uyLHPIxJCEUstmUue4H8MEdHeprb3HEtjSzZX9DBBVAGt3MPO03CmhfxJAhQ5LctOLzVCutg__'
  }
];

function App() {
  const [cart, setCart] = useState([]);
  const [selectedSlide, setSelectedSlide] = useState(products[0]);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const [selectedProduct, setSelectedProduct] = useState(null);
  const cartRef = useRef(null);

  const handleSelectSlide = (prod) => {
    setSelectedSlide(prod);
  };

  const openCartModal = () => {
    if (cartRef.current) {
      const rect = cartRef.current.getBoundingClientRect();
      setModalPosition({
        top: rect.top + window.scrollY,
        left: rect.left + window.scrollX,
      });
      setIsCartModalOpen(true);
    }
  };

  const openProductModal = (product) => {
    const scrollY = document.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `${scrollY}px`;
    document.body.style.width = '100%';
    isCartModalOpen ? setIsCartModalOpen(false) : null;
    setSelectedProduct(product);
    setIsProductModalOpen(true);
  }

  const closeCartModal = () => {
    setIsCartModalOpen(false);
  };

  const closeProductModal = () => {
    const scrollY = document.body.style.top;
    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
    setIsProductModalOpen(false);
    setSelectedProduct(null);
  };

  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (id, delta) => {
    setCart(cart.map(item => {
      if (item.id === id) {
        const newQuantity = item.quantity + delta;
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
      }
      return item;
    }).filter(item => item !== null));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
};

  return (
    <div className="container">
      <header className="header">
        <div className="header_background"></div>
        <div className="header_inner">
          <img className='header_logo' src={Logo} alt="" />
          <div className="header_content">
            <p className='header_content-typography'>Только самые <br /> <span>сочные бургеры!</span></p>
            <span className='header_content-delivery'>Бесплатная доставка от 599₽</span>
            <img src={Burger} alt="" />
          </div>
        </div>
      </header>
      <div className="categories">
        <div className="categories_inner">
          <div className="categories_slider">
            <Swiper
              spaceBetween={8}
              slidesPerView={3}
              slidesOffsetBefore={10}
              onSlideChange={(swiper) => {
                const newSlide = products[swiper.activeIndex];
                setSelectedSlide(newSlide);
              }}
              onSwiper={(swiper) => console.log(swiper)}
              breakpoints={{
                360: {
                  spaceBetween: 8,
                  slidesPerView: 3,
                },
                570: {
                  slidesOffsetBefore: 30,
                  spaceBetween: 10,
                  slidesPerView: 4,
                },
                600: {
                  slidesPerView: 5,
                },
                768: {
                  slidesOffsetBefore: 64,
                  spaceBetween: 12,
                  slidesPerView: 6,
                }
              }}

            >
              {products.map((i) => (
                <SwiperSlide key={i.id}>
                  <div onClick={() => handleSelectSlide(i)} className={`slider_item ${selectedSlide.id === i.id ? 'choosed' : ''}`}>
                    <img className="slider_item-image" src={i.image} alt={i.name} />
                    <span className='slider_item-name'>{i.name}</span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <div className="cart" ref={cartRef} onClick={openCartModal}>
        <div className="cart_inner">
          <div className="cart_header">
            <div className="cart_header-title">Корзина</div>
            <div className="cart_header-count">{calculateTotalQuantity()}</div>
          </div>
        </div>
      </div>
      <div className="products">
        <div className="products_inner">
          <div className="products_header">{selectedSlide.name}</div>
          <div className="products_list">
            {selectedSlide.products.map((product) => (
              <div className="products_list-item" key={product.id} onClick={() => openProductModal(product)}>
                <img className='item-image' src={product.image} alt={product.name} />
                <div className='item-desc'>
                  <div className="item-desc_main">
                    <div className="item-desc_main-cost">{product.price}₽</div>
                    <div className="item-desc_main-name">{product.name}</div>
                  </div>
                  <div className="item-desc_weight">{product.weight}</div>
                </div>
                <div className="item-btn" onClick={(e) => { e.stopPropagation(); addToCart(product); }}>Добавить</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="footer_inner">
          <img className='footer_logo' src={LogoPrimary} alt="YourMeal" />
          <div className="footer_phone">
            <div className="footer_phone-title">
              Номер для заказа
            </div>
            <div className="footer_phone-content">
              <img className='phone-icon' src={phoneIcon} alt="YourMeal" />
              <a className='phone-link' href="tel:+7(930)833-38-11">+7(930)833-38-11</a>
            </div>
          </div>
          <div className="footer_social">
            <div className="footer_social-title">
              Мы в соцсетях
            </div>
            <div className="footer_social-content">
              <img src={vkontakteIcon} alt="YourMeal" />
              <img src={telegramIcon} alt="YourMeal" />
            </div>
          </div>
          <div className="footer_desc">
            © YouMeal, 2022
          </div>
        </div>
      </footer>

      {isCartModalOpen && (
        <div className="cart-modal" style={{ top: modalPosition.top, left: modalPosition.left }}>
          <div className="cart-modal_content">
            <div className="modal-cart">
              <div className="modal-cart_inner">
                <div className="cart_header" onClick={() => closeCartModal()}>
                  <div className="cart_header-title">Корзина</div>
                  <div className="cart_header-count">{calculateTotalQuantity()}</div>
                </div>
                {calculateTotalQuantity() == 0 ? (
                  <div className="cart_empty">Тут пока пусто ;(</div>
                ) : (
                  <div className="block">
                    <div className="cart_products">
                  {cart.map(item => (
                    <div className="cart_products-item" key={item.id}>
                    <div className='cart_products-item_info'>
                      <img className='cart_products-item_image' src={item.image} alt={item.name} />
                      <div className="cart_products-item_text">
                        <div className="cart_products-item_text-title">{item.name}</div>
                        <div className="cart_products-item_text-weight">{item.weight}</div>
                        <div className="cart_products-item_text-cost">{item.price}₽</div>
                      </div>
                    </div>
                    <div className="cart_products-item_counter">
                      <div className="cart_products-item_counter-element" onClick={() => updateQuantity(item.id, -1)}>-</div>
                      <div className='cart_products-item_counter-element'>{item.quantity}</div>
                      <div className="cart_products-item_counter-element" onClick={() => updateQuantity(item.id, 1)}>+</div>
                    </div>
                  </div>
                  ))}
                </div>
                <div className="modal-cart_total">
                  <span>Итого</span>
                  {calculateTotal() > 600 ? (
                    <span>{calculateTotal()}₽</span>
                  ) : (
                    <span>{calculateTotal() + (calculateTotal() * 30 / 100)}₽</span>
                    
                    )}
                </div>
                <div className='modal-cart_submit'>Оформить заказ</div>
                <div className="modal-cart_footer">
                  <div className="modal-cart_footer-delivery">
                    <img src={deliveryIcon} alt="Delivery free" />
                    { calculateTotal() > 600 ? (
                      <span>Доставка бесплатно!</span>
                    ) : (
                      <span>Доставка {calculateTotal() * 30 / 100}₽</span>
                    )}
                  </div>
                  <div onClick={() => closeCartModal()} className="modal-cart_footer-close">
                    Свернуть
                  </div>
                </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      {isProductModalOpen && selectedProduct && (
        <div className="product-modal">
          <div className="product-modal_content">
            <div className="product-modal_content-group">
              <div className="product-modal_content-close">
                <img onClick={() => closeProductModal()} src={closeIcon} alt="Close icon" />
              </div>
              <div className="product-modal_content-item">
                <span className='product-modal_content-item_title'>{selectedProduct.name}</span>
                <img className="product-modal_content-item_image" src={selectedProduct.image} alt={selectedProduct.name} />
                <p className='product-modal_content-item_description'>
                  Супер мясное наслаждение! Большая рубленая котлета из свежего говяжего мяса покорит вас своей сочностью, а хрустящие листья салата добавят свежести.
                </p>
                <div className="product-modal_content-item_makeup">
                  <div className="product-modal_content-item_makeup-title">Состав:</div>
                  <ul className="product-modal_content-item_makeup-list">
                    <li className="product-modal_content-item_makeup-list_item">Пшеничная булочка</li>
                    <li className="product-modal_content-item_makeup-list_item">Котлета из говядины</li>
                    <li className="product-modal_content-item_makeup-list_item">Красный лук</li>
                    <li className="product-modal_content-item_makeup-list_item">Листья салата</li>
                    <li className="product-modal_content-item_makeup-list_item">Соус сорчичный</li>
                  </ul>
                  <div className="product-modal_content-item_makeup-weight">520г, ккал 430</div>
                </div>
              </div>
            </div>
            <div className="product-modal_content-action">
              <div className="modal-cart_submit" onClick={() => { addToCart(selectedProduct); closeProductModal(); }}>
                Добавить
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;