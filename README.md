# codedeploy for raspberry pi

## やったこと

1. [これ](https://wiki.52pi.com/index.php/USB_dongle_for_Raspberry_Pi_Zero/Zero_W_SKU:EP-0097#How_to_use)を購入。ラズパイをセット。
1. [raspberry pi imager のインストール](https://www.raspberrypi.org/software/)
1. raspberry pi imager で raspberry pi os lite を SD カードに焼く
1. SD カードのボリュームの直下にて以下を実行
   1. ssh という名前のからファイルを作成
   1. config.txt というファイルの末尾に `dtoverlay=dwc2` を追記
   1. cmdline.txt というファイルの `rootwait` のあとに `modules-load=dwc2,g_ether` を追記(半角スペース区切り)
1. SD カードをラズパイにセット
1. ラズパイ USB を mac にセット
1. ラズパイのインジケータが光っていい感じっぽくなったら `ssh pi@raspberrypi.local` を実行

- pass: `raspberry`

1. [この記事](https://qiita.com/c60evaporator/items/ebe9c6e8a445fed859dc)に従って設定
1. `ssh raspberry-pi` で繋がるように設定
1. [この記事](https://dev.classmethod.jp/articles/raspberrypi-remote-connect/#toc-6)にしたがって wifi を設定
1. [この記事](https://hassancorrigan.com/blog/install-nodejs-on-a-raspberry-pi-zero/)に従って node 14.16.0 を設定
1. [この記事](https://stackoverflow.com/questions/63030641/how-to-install-awscli-version-2-on-raspberry-pi)に従って awsvli v2 を設定
1. cdk で IAM ユーザー作成
1. aws cli でアクセス key 作成
1. aws configure
1. `aws deploy register --instance-name rpi`
1. `aws deploy install --override-config --config-file /etc/codedeploy-agent/conf/codedeploy.onpremises.yml`

ここで `Only Ubuntu Server, Red Hat Enterprise Linux Server and Windows Server operating systems are supported.` と出て試合終了した。
