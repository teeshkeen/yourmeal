export const products = [
    {
      id: 1,
      name: 'Бургеры',
      products: [
        { id: 1, name: 'Мясная бомба', price: 689, weight: '520г', image: 'https://s3-alpha-sig.figma.com/img/6a87/919b/8dac371920a0148ebbc8f46f825349c6?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hhH5-p5JOMt6E8y2nMkktzisSHBSx-j~8oGbCbYjh-RDBhNwhgS-wmUqSvzha6AE4ziXq7r~aA1S9l~gI83MxQDFKi4ajySndTRgSjawfVfOWCF6vJfTMtSGBqynrhQOigR8wD0ddNvbGc79XiYZT6fXzE3APURuZ4QNsEqRdAhvMmvjuEL~7~bt8um37rTHcX7F3kEXfitCov95EhYC93IlpR3WI7lGEvcJYEKG7mCRba9~c-bqNT8HQbd~s96b5rvqtNqIeHZKYH36d8WvkNKAn3OtcWNlbHis5U4BSoLQ0EFQUcY73gp1tLl9gfhvQWEMcsNA3NpFHLsNJW1LdA__' },
        { id: 2, name: 'Супер сырный', price: 550, weight: '512г', image: 'https://s3-alpha-sig.figma.com/img/62f8/6fbf/95e6a94ab5ae20815b96ac0c5281bb78?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KeRzv4j8XB7vTQionnuow4Tv9T3yZI3tnzAJCXLymUwwTgMYSBJs-lLXQvasqfz95LXH8PTR2AnybTpabG2R2knDK4CkOLMgDAamcI3jM~TW1PQoPcByzVh8dPbgXclyB5BPKrtnLheDfH3S7oyVudMfAP~Z1NEH97qAMdDzvln5d11cz2mRK1Y1ZGzjZb8Kc-yGQmlWToM9zTrjfnOkfp0NX84vfl-EA8vaNDlbxsw3bgXA7nSANnUj1-oUmPAOoxxdBSvz9wYxJbxqQDNGoAcXenRjYzgYyaEVPEsiD5hyFTStQn2J5l0nvC4WAl3QZ03ReWm2X6bIrRG70VfDww__' },
        { id: 3, name: 'Сытный', price: 639, weight: '580г', image: 'https://s3-alpha-sig.figma.com/img/d0f5/c6c0/cd48ad19062ad88c8ec9dc8b6a7678c6?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o4Ck3c-gPaZ1dkZPKUHGhUmM3rAKXYc1Wu9Tkv9o-5Zajs-b4Gi7xc1SEWBm6CfocNWein~xyaEDddfUGB0bD-ZsOQQKBzuidXEaU-eD6YOO2DZCSgAypW9QEEq7kE3Z8aN4C1Guo74WL7q3TygFLbG~jrTtiPWbxH~LgiwVOX1IZRjvNgbalKFiz1Ec2maAUy0AHZ5nuHQWDWBZTZlDm3ZiXfIope3U8uU~CbydUWXsuIYwFB1EyE6EB1wkYeW3hqNsitKJMkwo~R5czigyRITe0rOUdwtoL9uf5XQjkyMdKSpHX8l0W3Qa-u47fSt7zQVKC7sFU7d5JB~R~Z~Fvg__' },
        { id: 4, name: 'Тяжелый удар', price: 480, weight: '470г', image: 'https://s3-alpha-sig.figma.com/img/06a0/774c/fbe6e527a55fed334ba88c61c52e24bb?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hC8H2xkaluYnUPeX5ccqLNJVwJD8OhKku4P0~7KzQQlwAyk7de1TZfIhmwPX4RGvY~oL9GS0YwTyFpOW3vMF10hcjqjoWYyPMep8k8rv6YJ7qO4vT~hPyON4yWmZYYqrf2~cjwKu7SxRwgoCbEDRwKzqd9n6StFB~HUDyA2V4TbnM7-u248cB0xZL~FhcMpZnznwlnbmYSSesBAa5eecsLn1X4bmL1t81iKu6zPrb6tjzDRYUO6JyZyV0xPdqrH9gUEJHJi0Wc4KRyLaUlbMAAAOgNCs9gh~8OlZaS~~cg~bhXS-gfBEsMMW5zBQ6-fEKDZfnZrO9xNjAHFy5YWFvA__' },
        { id: 6, name: 'Вечная классика', price: 450, weight: '450г', image: 'https://s3-alpha-sig.figma.com/img/4d26/7405/9a4cfc7a1be26deae92c68629054d152?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p4rpD6iB98G0Xl4Tj~Bq5bV71QqspvcR23a30RQRFYXx4fqPCcT8yq4XSAQB6vPfUTGjuAV4q4lb6qEUTn~RrUP8Ozsdo7mtnDVT6x5PebnsMtpTkbIfHDthPIHconQFVKLiu-PxM4N-~esTZEpl4L3l-AXIlsi3SY2uVdcFZwLEzzAuv3P9Cyqr-EL7YwZShGZw2urHKla~Cl3eZPJR0OuCVKXYB8u8HABhgz1pXQZU0RQIFHwEUfhah3cBv5Rr8TwP8UOPLEniiuJbYt7e98vFSpoSPtnyoUPxZSjcr-UlapCihbjVc2di7Y0p5tL6AKtDFNz~MVzpx~r9M2qvUg__'},
        { id: 7, name: 'Итальянский', price: 560, weight: '510г', image: 'https://s3-alpha-sig.figma.com/img/5399/6746/0a584eb768f64b7e4fcef360bef44f53?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JUttC0suSl1sF774UiVR1eauQGmYmmdE9zmCZYtP9rgn8xf0VPWJvrByZYF9ia1EAnKdmT0kJ15kYe5eddsPA2nLNpo6QlwIVdex3lnk1mPiB1UPdJdwBhfVe1ZgScWCLiA6V~E-nhI6YBAjpJ6Pi9oYBTqbVdwtPL1OkXL3uFR4pEYuN9Wx0JVQqoYIY2lZHV9V2-huWQCDVztqPcpN7FzLxelFy-Ch2a5d04e5JreYkoXvRAQbiEL1y8NCBJr7PmqbFZ7iDyu98SCMZS6du88btVVBhnz~lO1mG~etpMlL6U8XeLpPUZQQRIE8tSGk9qMWGqyglFn3WKv3MvPSWQ__'},
      ],
      image: 'https://s3-alpha-sig.figma.com/img/0381/f39f/a6237813cc6dfe45b8dcb0066c73d77e?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=huBMa3pHz5NUCtgrtyop6sO4ec80HGyZwOdSqQohrcxaU5SxMOQyvO4GtMxrHRJ2kJhtssNn1sQS7pdJxSoZ4g6iosULG3I5uwW4qhWDFDUVrhu5aH5A5aZy~uXg4g~-KvY1luLR10XuSqIbhbAu5rA2LuwNfeXVYqxVDhntWnJby1t8cjlD76tPKGoM9bUZf61Ad~wkj93tddX5B6cpE3z8oxyqT0ExbFheAvV-hgrffhVZZFAGxJHuaND9hYAGFzpvnLnZZ6yla-Z7C82VnOixEYDZX-Y4NeS3UpZB~cTqwMmAB2KRLNR702ydDaOa8UeAUhkt34QDY7IfDHl2kA__'
    },
    {
      id: 2,
      name: 'Закуски',
      products: [
        { id: 1, name: 'Начос', price: 250, weight: '220г', image: 'https://s3-alpha-sig.figma.com/img/a56a/e9fb/35b4477845815912cabb181f8e813c1d?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SyCaEcYObKi8vEfZgi4hC~fwKXXt0SzjqVbxXwaoRFP8Jc58cS1e1G~cVARFIcmiR2duqrdZ6HwVZ4k1Chkci5kR4x-6CUliq72cyLRJVX9D~BoIdOVU8WboF63CI0D41EukE3tGoekQNnwj0Gf5ZJ~3iRWULeqVKQ~rvJd-oB7sbvt1ePQaFd03InlnoqyDcJnGuLAGVsuf1hPI56tOv7vyJBDKmrKDnQ2DH-vKrzNz55qHvcV0Ukf2KLiN6r3957tzuHqmDPw5nxm9Kck9xRcvoHDe6ezFgQW2zE5SX-iIbF3cKj3tXsHq6KhT-px74OY22a9TAT4OOhVmACWhmA__' },
        { id: 2, name: 'Картошка Фри', price: 245, weight: '180г', image: 'https://s3-alpha-sig.figma.com/img/fa0f/dd5d/e6bb26d79763ccbc8e249b5dc9a1b9c4?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oa114IY29g~vieLEgk7bFAZSlTl2QJsNEwU~0EjVcF629JkTqKFkQpitkS5wV3CyQIt3iTw9Bs-UVxoEgBm~wAhEoo7OrTOXXhqZX8YbgCndbx-iIozqCuaYrBiziDyyCZfS~ath6t0uq~iFW1aWpERflz6WbXv3Rvl3Rpkxn9lOuZRMuTZRU6lkwZh5Rm-p234rLaf87lCn22YiLurEsrGleXTxxsH6QPCR7TnYX-SUYIzlgsB47PniVDDMBGgHB2a5Vchjis6DDJr8n1XfyVrOH8aMVZMklhccEnIQ1ZQOaGYcJb4y822eGfJlP6urwdD4-emh7yoV3HvO7zXRaQ__' },
        { id: 3, name: 'Луковые кольца', price: 230, weight: '160г', image: 'https://s3-alpha-sig.figma.com/img/ebeb/b9e8/65d06cdd8ea00b7bf7a1819ecfe5ae79?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DRGCqWVSxFb-zXERffn74zWnWasyDs0noCPjFQY8R0Xvqpa53EPZbJ~7ey5uRIoCeZnVvELlrSqHYsPCR3MT-aBbOVLCXyn5SKhPVF9UOKz2rKomlTfDZkdx26U66CpOxtBdqK57DDP4JKx8UNGGwPkth8STOsJXM-4vbx9jVVBik7dH3cCqz1aavERnczp3OKjlboa8bOgF9p4C-ORwlN8cMHl7wChD4U4rnGXgeZy8uiY~2xNU-Xi1Hlso~QuGy2Hj3ecBSd1yCsIxuCC4vutQ~h6u6yl-xOKEH61tDM0VhDc38cZnc55inrd-rS72D9Niga5RgucPdpBSmX8tSA__' },
      ],
      image: 'https://s3-alpha-sig.figma.com/img/92b8/3c53/7ab5557fc2179649f7d2731d81c17410?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=itcHqYQ4fzVBw0iQwdo8DRQ5EDvHj3s7NbPJdzMrBxqi0dH8nyAjJ~exdCDWc7owJ9e7mrSA5miwu8otd1qElikdYZYEESqC5jME9u0-GxWpQ3yFGGYuYQMBwSD~PmHt1ZcwgsW804MwxRbMF8TPryYoSCl5lymRnXGFvSIwrZ4viveTgfX7bXrA~VJMDNPnWE07bD9elCRfq3wmWKPSdPX8S2HkhaSaktjbTSoyugIjOPY-xId-9lJRou70tq8CUqirtAL5cI4zUW6EBKjQZK7ehD48DaxKiudKSw7tPfKLN3vE1Ixm~ZhItK3OUajPdcF63Irk5iDq2ftlth8gVA__'
    },
    {
      id: 3,
      name: 'Хот-доги',
      products: [
        { id: 1, name: 'Домашний хот-дог', price: 290, weight: '250г', image: 'https://s3-alpha-sig.figma.com/img/7d64/7996/b3115d672f812af2a85791a425cb4d1c?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JV72oJohtvY5b680fZjxGdNw6nVHDMMsN5ju~6t6Uhri-pI3X5Patgfea-K3h-bahJdDAW0PvTUn1ZKwFk4DmYdzqmELPyWdHujKPCyVdL8QMYukwKH30~VjZk4g~eJXa3YhwaGIAcEVaxsGtkEesD9WpPvMpnTWY5EgyjlwTNFw35ewjspTOUbM87~QDowbtSxdxa6V-ZdJPTvkzLNFrtMz1nCuriPfeSSaindVNqhnMo0lflysIS~O3o-pxS7Ey79CstzBXKl~XFydObyBkCB4Gil4nVEhO~Ab8y3dER0VW-pBL0i08i2wTCgE2bvu-6I28yXIJl5cb0orClCN4g__' },
        { id: 2, name: 'Жгучий хот-дог', price: 239, weight: '245г', image: 'https://s3-alpha-sig.figma.com/img/87e2/7628/6cfe55a3ef9e3bf47a2aeef3962ae83d?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mtCpcr-43kzSr0ByB-GENS0AAYvSD-nZ05wxDdV6HSKM0Quxnanl4ayhSMlDSlATi2CY2C~3OEgDAFfKfqRyp98Li~3rW3imOcOODEYnOLVklUualLovemDErix6RLOMgzHVbV8JgbjH9utPC-k1kNIG~pmVaiA4IcaymuTttd1EJqCO4bfonCVRJp5gG6E1dFP2yUgfgIEwUARznOFnIZli46JjSC43qsZ2Bk~g~X1TlQn4brVsbXjdJIhafnjm83ueaC9-M0emB2PoPs~u9uBxCr5LfZYOIn~TrwznrayMVPQ~SGS1w~bYaAChwCSgcGwTgDJA~28fame~VXCn8w__' },
        { id: 3, name: 'Классический хот-дог', price: 220, weight: '215г', image: 'https://s3-alpha-sig.figma.com/img/a5b0/dcf0/463946dde77571fb7864255f4acd53a9?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hHn2iOCuT9ieojLCJ9N5pCKCsHb800cODCLJLwIO0MWVcmCQ7jjPB5vDooRCxKwyjFMrVwbEQRzn1ug~n7plNbfgSEnkgb0axwyleIs7rsdJ1yRLu7I4k57eE926pk18di5F4urfyhGGYrohP5qe6XSmM~xuV~e8MB4Y-1y1hqKwFkBNJy0fJ-roi7LoiV-19oy7Sn0pK7ZxoBMVJgqTlIucNhtHhzm3GlFxmWi7ZB2AaEUTQgR2Y6EuunRUmH8sEH7Icqd92a0XVMMK9WNk2UMPtxjbFE1seepbijY~4fl8Ail~1LvhkQJJpf8tXWyeO~7TO4fhv8EpJzT7Snk3fg__' },
      ],
      image: 'https://s3-alpha-sig.figma.com/img/b42c/bf1c/f6248c1ee1b1fe2667d6146ce4d46538?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CNzQcmhP1FClMRCh4OpBGqHzq-yKUR5W~Pynv0rjXjK4ZtHcynXwIzJvpJO~HzHNUSlvJhyQqo80sk96vS2pqNIherN46N7C74LSW~WagINgCslqE5Urcmp8q20wm4nZo5tNecJIN2BjaTQwm~Bv0d5Vc2TaYA0nDizEhTX1O~uYt6z18NwYrjTUy4YUFlYMIGjw4c~HBiV7nZQ6y3n2bHFDVuUPw04~Q-ZUNEWLmKJIFQXNGDcMdF1gACd5OUH1pckuRmNEDOym1nCjb3~7x3NxEjaO5R89GlkqHEF0eWpLY-FBDfgEaRWQsAsqaoutv0YAkXwtp-jcgQz8yK6MdQ__'
    },
    {
      id: 4,
      name: 'Комбо',
      products: [],
      image: 'https://s3-alpha-sig.figma.com/img/df73/276e/1adf3d7ec3e179fbe7b0da6296ce38c7?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G5TE2SDgluFZVV6Y2b-146mnARTD6dBYllbKtJiH-wZg4w6pPSus5KsVuXVTH-1eFsHhXfjxaMpgxw~agv0SW~wwyX5yj4RSVoT9tXsv9jgHupbLN3QhvE39fgYZ3e1COd~vliDJZkYIW58ZBd4bO5pWfY-NiaVF4nKm7MiMfRWD3i3wIYVe4xtpgm4oA2l~mOOW8t1WeL88vThJpignaKL1UxgbWgt20YXPeORfUtGtUDwF6eIqqF5tpKQS24jWbM-NcV4fVgzc1o8yWxJjvdG6Hm4qt0n-N3thVrD3pp95Z-jgRBa2wuNggPq5vsKwGJjr9FIp00P1wn-ArAE6uQ__'
    },
    {
      id: 5,
      name: 'Шаурма',
      products: [],
      image: 'https://s3-alpha-sig.figma.com/img/aad2/7139/e74b87f3ec66400fb1140b2b5d83dc12?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Qk4hfEOEAzKWIDzrtW6fB6MMSvsgd9pZL2Ta7f56OIJhM5fikWY3C8gzRrjoSTGbAhvjmX8p-NC2Zncfpnyh1EBJmUhhrryGJHmvWbB-vBtEirRYXMD9W2JCVHXRntf4UOsRqzJwJCurPsz3K6dku0WRqy5BM3XHRsBlhtjl50oG8MiXe64wlydtuuhipOmeYY2ffZvH5koyhie7l3J1qMKKbaObPFA1YIfAew6rfHal3gPyEUzfLYtE1BxnoD~l3xZHlZGNuSGrhKpuajcOd8kElZCJ~iFj10Yi0UCEGcXXCbBm2BioKPUBIBMZoZIrLOIZhWuNwbukUxm3IWgTzQ__'
    },
    {
      id: 6,
      name: 'Пицца',
      products: [],
      image: 'https://s3-alpha-sig.figma.com/img/4bb5/b0eb/9ec5a254ece55efa31af986f3ab9ac23?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b4a7oQ-Ge3ZDGAiOrdv8sWnS3cc2fcIvDFR0hJxM1IbCeJbPydcBG-mmT6b2MabyB41O-xRtwAZsQ2KXcWaKhEJYBxh2juKw78TzY6Spz3I5zX~G5yGuQljkCwxW-jEbTCPBAuiuLPaAUdfM09IWj~PsXy1iaJ975UJScDTll6~Y~g4t-ngGTJfJPPTbaeIGdkeFFqA6-WHL3ANazraQVH9lKfhFwOjjsZl2uSDf7kDV2DnVmmbK4wypkC0HjBwH~lf22cxY78k5cIzX9lSSSMhyQ2sOjLF3DCcHgkmg~a5tPYX8UrLfU0TSfDS5dReZVerR5VHfSKzOdiV383uiBg__'
    },
    {
      id: 7,
      name: 'Вок',
      products: [],
      image: 'https://s3-alpha-sig.figma.com/img/f60d/fce7/c3673197e6375d8baf5a375d1f23cb09?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GAXNgp5vMFUBSP4Iu3YyUPr-6ZOzcz-YsYio~xmrK-abV2~wpDsf0VioVuw4aFuzljwnMAJCgbeEqRdioZcbq3xfjTcfyK78bziEAYeMI5mLFus3Sqn-qr3U5gswOIyTKyRFp~3AoZww8yLO6op2PgrVOzhfvNFnQ-wtWi66HZCjd18hGm-yyg5usheul5F90zHmt6Af4yI0Nq-atUXxDqo~gmMBULTsShKIYzck03d2XkTRz77F5sCc0ykQzae9Ith0l5DxdCfCLhnC58wtBqBYD1EnLxM~HWlhMIYPVHNxrsxFvWr3iA6r59EDPxff-bw0MpQdBmIAlECnlCBmNA__'
    },
    {
      id: 8,
      name: 'Десерты',
      products: [],
      image: 'https://s3-alpha-sig.figma.com/img/3543/15ae/6d12d38b33f21030decc1f3fe3ccafaf?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p~o1rFLLr1Pb23YOzl92of~a23AKK3cpU6yFdW0VJmD9Ks2uvRuikOUdSyyuGxGDp7gbY7p6iwdUllmlnt2SDDenWPl6ELMj8nyTcAxiaFiExvL8oSY1GaPwVM90WybV0g1Kt9-kFraAKJ73hjUqZ-15HmBs5lg5N9O0uN7SpFLFPeALFPxdS4Me~oPcofEhQKA6DPjNDUV0gyip32of-h7zO2nlB4UIG-9jAuHruhvGleEa86YCKJrGVO9Tkz3JFmvOTaSlPp2Y3ddIgq3VKPKvNKPA59ECy-aFc-vIW~spEZP~PDDT7MJrO~zQAe~s9C~Goi6Ay8VA6IdfhFhlQA__'
    },
    {
      id: 9,
      name: 'Соусы',
      products: [],
      image: 'https://s3-alpha-sig.figma.com/img/7b10/ee7c/622fc61052ca5b4e699a1f2a8e2b36ab?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pHS4XngqgUSKwQKWLKdHuzytmU9B6lWNT-aoX3Korqf2WDX4BJDmsvTMuGJfRW0oIHU5gYaQVIPfusagXusfxXuw254m7lN7A48mp5fX2k8w2RODJeZcGKbAN9~V-axzTPLqnLxAQw1Qn2ljYyvj0CPpbIZIz6OFf65g2kRpp3KeUPawcxG82OZqxRKDz8jxRmrBwM1ySwiY-O-U5hLp9-hoH5WnsUIAu8RbhjqfOeG468VNsJO3PTxqBSblRV70io5qibTXbS4Di0uyLHPIxJCEUstmUue4H8MEdHeprb3HEtjSzZX9DBBVAGt3MPO03CmhfxJAhQ5LctOLzVCutg__'
    }
  ];