'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "426313f2f3133c2f20415344c4a22df3",
"favicon.ico": "149e08856d77d9381370a5e51c696778",
"index.html": "968d4d8b77c0737e26c9aee268a53e3c",
"/": "968d4d8b77c0737e26c9aee268a53e3c",
"main.dart.js": "7a18c4f92a5bc51f61b0d403254b7b29",
"favicon.png": "317e98c86a18ca180fafb8de7aa57477",
"icons/Icon-192.png": "18b0b9c418901d2065abfced9aa99ec9",
"icons/Icon-512.png": "a3ca15a422492555ea20a4b11ec675e0",
"manifest.json": "73f73f10e3ba940bd58d622742613ab9",
".git/ORIG_HEAD": "64955d03e0007e8e4d07b2732dcb531a",
".git/config": "9af3f2788fe9917e23245c397784ec32",
".git/objects/0d/9070089a56fac641c5debf5bf3895fda535a08": "845db1eb2d68abd3405401ad5ee92cac",
".git/objects/3e/70dadb5417018a19eb34022baecc8f75409f07": "d9b8a44a8d4be1a6b0e49285dae45392",
".git/objects/68/0a1b3f17365e67143e247286f73d2f09077ea5": "5051ac0988a591d1403757b693ff6e36",
".git/objects/57/4fcef47118b1fcac59de0eae7f814435b927d3": "5ddb574ed2be0aacc680ffa946921b72",
".git/objects/57/149f468f2ab477379b2532fae4a16558413f2c": "544f089bf0730183fbf78c8fa7d19099",
".git/objects/03/b664ffee1c895477c1c4a7f4ab82487e627932": "a5c8366e462a8e7cf1b07f1086e8cb62",
".git/objects/04/2fb388c7c6423ead1dde018fc65d53d0dd1d94": "6f3d90a40acfe0eb764d372f9db4754a",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/35/0c305207b3a4d0b8cd1f3b8e6360c12d7b4cd2": "d00aaaee4c0bb3b000c20a93cd8c0ad6",
".git/objects/69/faa392e99081b02f00c25cb56a506799a83873": "e5f63bfce4da519ded137e5850e891e1",
".git/objects/69/3c4ede02784eb55822825cb4075e5ca2aadcfb": "fbeabcc2218073effb37df455f8297ae",
".git/objects/3d/e0a2c1ce3108fb4ff1369337d0ec3c8952a034": "7cc17f4fbb47f14b23bbca03d929e350",
".git/objects/58/c3dd30b9a94edb9fe0ac47f8b13d7df3f687a3": "da0fdc4002ec01de8f48d499b1a38b8d",
".git/objects/58/06230163cd79bb56aa01ae331c1a4ca5f73d4c": "799e2b3231ae2ec19d6255a1bcf07704",
".git/objects/0b/3fa3ee50646d0cc7c20af89aed7da6dcb3aadd": "301e10a55564ad16196fcc5dac6c20b9",
".git/objects/0e/0cd55885bae1ce222475a42a7eaf3f593f3403": "6ed07f4551c10256b7bd4f43d6d69829",
".git/objects/60/7aa48d8f0415c5b32b7d8cff4707303d824020": "f8e06a9febd37f5e99b6b88af8be6010",
".git/objects/5f/dc637875ee91576899cdd845ba26fee2896662": "1fdead60e35cc682351812046d6a4d1d",
".git/objects/05/17bdf0e5202f07e10a1fdb6cd1fe30f0bd10d2": "72cfeb2d58a7aa971d6b46030fc948d5",
".git/objects/9c/72f0967221c414af9a5610dfbbe766c8004e59": "83c07b28f8addcd82a9a5b109ff7c4cc",
".git/objects/02/c9f93a8e4cfcd7001116e1975e7793a726ca89": "6d21aefd3855ab4b610554773e6a442f",
".git/objects/ac/6399dcca5251f9eb43a7abd0f297fc3d8b2e69": "21d63c69fd9445e7bced86549350aacb",
".git/objects/bb/80d15228c26be486e68f9265ab68e0b4b2aa70": "93974073f0c92c21902b0a541e953a05",
".git/objects/b3/e2cb1e4676453e3b6a66e1c06eafb7ad9370fc": "5a6cf67fd1a4d15a82f0cd5126246f5a",
".git/objects/b4/9ed703f4db1c59b9bfd4266fa274d0c5907914": "0feb03f2df20a1c2d1bb10d4ad03cef8",
".git/objects/bd/1348ea13a2ddd3985c2ea76fc246e7e25a9bbf": "03a5b60afed9e466c6a05a22f143503e",
".git/objects/bd/dfc510efab41c7171233a5b3df7a62a5e93d86": "01fa3bfe5d90999da2e9e188e3de9d28",
".git/objects/bc/2dc68d05aeb112c6c90913135e1a777401f594": "dd36c55862a58da3a87f88c4320a03e3",
".git/objects/bc/c432de61ede5bb16c0011e876e7093dc2915a3": "93dc587d07c433c9a0762018f08c67b7",
".git/objects/ae/5445a64776ef25b22bce2403125bbbeab67e5c": "45247c59e5aa96fb2f675e809bf548f9",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/e75161355fa7242eb9bd071edbbd8bd4f3077e": "ed0debee8c0ab5e51e3ac97d2fee36a8",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e2/1210e8c2e31fc3c5c49d05af805e097ee87160": "1498d152746d84231cd6d0532b74031c",
".git/objects/c9/fffc92840206ff157a9a1211497dbbe0df1920": "7b49077d4e23bea6fb5bfc1f53783162",
".git/objects/fd/ca66b4fb0b2c957d8253f867646c6ca10c6228": "a36c2f5745b454ded1cbad1603a3fba5",
".git/objects/e3/f2f103d922ec371ea639ad6db08641a16ac172": "59cb855fe39ff674d5229de2b30b0eab",
".git/objects/c6/85cc701f99d7f66f6fd53c81fe198228490367": "77860517c108ab5304ab9e470fd00f90",
".git/objects/20/06b3c937711f5c2b30df4f1a3de40c62b7c5d5": "0677b52767ccf3ad355e6c214e11e840",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/12344b6e3a0cee5c2fe5b26b5855c0869d49cf": "b0ec237a5e428818b5322484b4acac44",
".git/objects/89/3ff4019d7e2c4971d72f0a76aa2af3b495ffc3": "477bc7207d22ee43fe66afe608c7754e",
".git/objects/89/8a5d8bbd2b96f88f60130854d889d85a1cd859": "5993e0226932dbc70166528ce7908769",
".git/objects/45/d37f34d59e6197826e86b124cba59799983fc3": "58836960dda818e8a1b8ce0c368315ee",
".git/objects/1a/379f3158057163294f77f5e32410b8dbb51dad": "530b21c0278b0566e954615db2dbb5c8",
".git/objects/8f/e8b4b080b2a0e0a8203537d616c8572dc8112a": "a778770a9e397842b353359322142f8c",
".git/objects/8a/6ded67751caf7f09827f444df06a8fa6981b0c": "2f6dd1c4475ab15f7ba7bbf29addcf2a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/ea3e1bffba1cd199dd68d7948cc95b333ad703": "611742bfec00a45eeb96ace55d9fae7e",
".git/objects/19/14d82e560e7619c5302704cc9f1f16e69d1191": "94d1ad1b14138ab863ef615a479328c9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/36/3425ca86e53a6bced022bb815d3f512414866c": "8538381205a933a0982d0128dd435395",
".git/objects/36/949ba024367320449a190cc55a920a9b6a09eb": "ac4bb5a9d2bf8eede85e317d68d3330e",
".git/objects/5c/3773b28e3ed4857415174743389b38d5952706": "ed9e52d507b76fcc6fc186dd4b00e0c6",
".git/objects/5d/9c230d3472075b9b82019f9d59706ee14b6753": "e4b18290538fb0c312ddb8b1c520a3b9",
".git/objects/5d/196fb464251986c57195bc74541bdd6e95fb56": "6909275cda7509929235e4facef7113a",
".git/objects/91/074192e48c95bb04a09b20fd8d89eaba30a5ca": "6fd607f391196e992ec091b7d7e1f985",
".git/objects/65/c9946c1e234637df2412aa82e63fd4094ebc14": "3c92d0fb91f0654c9fbf8a498caf6de3",
".git/objects/96/ffeeb7c09009293f740d9a43354f88682a2d51": "cf4165856e6b92acf26dba0fdf972efa",
".git/objects/98/6098041c4acf3bccc349b50d017726ba7c700f": "5148e191a9ddbbac1012060782e4451f",
".git/objects/53/dba645c2c9a039209ef4d3363d993afbd49809": "9e2d584bf4aca1946329b5de1559acae",
".git/objects/06/9bb211cdaaef7e5f66eb62573980b368664f1f": "a41b41616a08cb4a0a40f0460dfb0ccf",
".git/objects/97/f5c1a5da922ead01d7b0a890bac09c47127461": "ee808062a68fb9de17e582f607d8a613",
".git/objects/97/0cf1aa00aed6df63db5db3155142acffaeedc9": "c1403e3e91a70267fa57736cfe58c07c",
".git/objects/97/437b4897cc4c072bb5bce3cc79e9a370f22cca": "a36b61b184d21717cb8d775ba9c21177",
".git/objects/90/5adb6bf17bd9b8466ec229cc94ab500f39a03a": "95ec997884ba09832f946ea142c8d2c2",
".git/objects/b1/c642e9f9ad99f79aea2eb3b40b46171e7726c2": "765e1767ca3461b34a25b88fc6128964",
".git/objects/dd/e6f521428f0bed5084cb3ea6bfe8bdeb9f85f7": "15134e5d15c41e9c1803b30176881833",
".git/objects/d2/1d26544ca03c86aa1e7bc20291b7913ab3384f": "af97138652e06b0b733a3cc881ed2c8d",
".git/objects/af/6719ace2c155cee049b7f456c55cc0dd4a82ce": "dd438cc5aabd42f23ea22195c31e8875",
".git/objects/af/754b76937e97bf1be7a920aa44bceb0068bc21": "b3d0b4fba35c1026fd02dac962c8cba5",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/b0/b541ac6e27740c7d16aa18104a4b76568bc61c": "236913a591cb24ab5efbf0de88af2612",
".git/objects/a6/84fc02017e9a015afbf2968c95572293528943": "b60fb964893df3cc97951e5c322fc955",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c4/c8212fccc4ba1a9c8dd31db103d21ec9cfd7b1": "0601f4dbd8a90db9ef20c69bbcf08cf2",
".git/objects/c4/e77173ad843f5e13782510bb9a980dedec80af": "d8675c4d885d5d984c022b50545299b0",
".git/objects/e8/0ec7f15179a175202a60e1d5ab9f92d6d554e1": "148b6e8447a8ccdd6688e945409ba5a0",
".git/objects/e8/0ff295c433233b2ec6bf7c22e8c2fee965ccec": "1f0598891ac8823c9592a5debee06280",
".git/objects/ff/051c4cde9888978d38a4cdcb60f3ec699d5a0c": "1d40126422fb25e9af98d8b52098de1d",
".git/objects/f6/a884fdd535c38610f103bc82d78ff3bec4cccc": "c3ff8336f9e0a9d5c51be7653de21a87",
".git/objects/e9/14cd53ef6707258922123246142d992aa349f5": "6ee57341db3c868bb4f89365be24c38e",
".git/objects/f8/96850ffb94f6bfd857d39cbcebc3c81054ebce": "83bb7f0a326de0eb80683fec03d8ca73",
".git/objects/e0/4de294698c835e97e1bed23d5ed0b7510e947d": "efd84b15f9b8346c1768010a879bb3f6",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/1b/ccb3d07bfc77df8c08bacda9b2e97733ae08af": "eaedbcd714adee7aee97c3f0b7131f5d",
".git/objects/1e/7cd4d83e27a6aa871cef7d198aff0e2fab2e07": "c924689e4c4d849844d030f48f52f51e",
".git/objects/84/22e67937c42f2aa55c158093359374962f23ff": "b096b3a9f3896f56cd0f082731164e39",
".git/objects/84/d5b8aa9ffebfdc3bd0d240f435cf5aced4e97c": "e52266d270abfd208db72954320125f4",
".git/objects/84/9bea7724ffa03ffdaf81fb7507176918509b0e": "42cef85901fc706bdf8c9ecd1aff33db",
".git/objects/23/e6114370af460018e7141a0d177b2672a3628b": "a618a871f9722d81155b836424ef11b1",
".git/objects/8d/443d5d56ac36091e9689cd5d1b1948d9124545": "eb1c5a32937a98bb8b8612d5fad02130",
".git/objects/12/7e119c838ce1ea837d90de729361f20a970ad7": "1f37c25b4c99a9aa9adbfa13b988921e",
".git/objects/1d/7dc079b3bf5aa9285e67722cb6bff6f050af06": "c47fe340fc72be693a7fe1cc2a2d5a61",
".git/objects/82/d73c98b2e00d9238b698259d78809ca71565b6": "cd8c264d035b5131fea90822314341f7",
".git/objects/47/6ceb60376c0f4780f79cfb1e26aa221faf3a87": "7120a4f0a2bd37c0ac18042028aaacf4",
".git/objects/47/b3c5f76a8af32f6072498923bb5ba2a2f9267d": "c4c40dcd14fca7478c5bd15c4e14c568",
".git/objects/8b/d52d9e31f2e2af4dc29344a2653ba1e2feea3e": "3566624a0fabd29d3dd6588e35d56e96",
".git/objects/22/feb4c88aa2d3a62b86080b67cb0a90fcf04ad5": "4610ed83fe2b5853d909eac40642c136",
".git/objects/22/e8f2643b0721ff22997fe04cb21ae88d55ff4e": "5dae35cb9f95d71d2863ea8c7df6b953",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f59b0ea3992b7b8e7274aad2bbb734c6",
".git/logs/refs/heads/master": "e21f0aa7b0dd2906935a0dcf1fa3f0dc",
".git/logs/refs/remotes/origin/master": "1b9085c91add1a3fa17533d34249535a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "64955d03e0007e8e4d07b2732dcb531a",
".git/refs/remotes/origin/master": "64955d03e0007e8e4d07b2732dcb531a",
".git/index": "27188312f2d53fe20ce80e027b0135c9",
".git/COMMIT_EDITMSG": "4e0f8557c55a76c18f4bf0532bb9954f",
".git/FETCH_HEAD": "d4dc9c45e546b163738116e3757edd79",
"assets/AssetManifest.json": "a774bde8109e245586c341f0dd5a21d7",
"assets/NOTICES": "6961295f4501fc5e9c9dabf6a7e10f12",
"assets/FontManifest.json": "53db916e40f5cd339f7e07ff4f1303a1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/projects/cLogo.png": "a05c590b454264a231d49034ad6ef4f7",
"assets/assets/projects/ssLogo.png": "32079c7bd2e54534b9600b41ec3fda8a",
"assets/assets/projects/flutter.png": "0b5a2f8d3f4d173805affaf9f84f6c87",
"assets/assets/projects/CBanner.png": "c35f071c6886f386a9e8d8acd6c96040",
"assets/assets/projects/ZOBanner.png": "fcc9ed7d8fe57de4050ff31be1d591e9",
"assets/assets/projects/earbender.png": "64099d76f6c7df0fac39c222293fd473",
"assets/assets/projects/java.png": "62be9fb6e1d7166e9cbeeed913096752",
"assets/assets/projects/android.png": "765adf924dae4d5e67bfb640bcd05c48",
"assets/assets/projects/SSBanner.png": "92a092ff75fd72d9556e7bd7a9025fd9",
"assets/assets/projects/README.md": "0a16645e24f9ba20dfe8a1c9bf073d5d",
"assets/assets/projects/CSBanner.png": "1eb1bed4b696a70df67f62ebfe5ea619",
"assets/assets/projects/zoLogo.png": "5f2354e31e1558a07d4e35d2a0a696cf",
"assets/assets/projects/messenger.png": "f28ead750653b586737ed63db6f2d53a",
"assets/assets/projects/rLogo.png": "6cb87ef5bc008b620b7348b921e0b222",
"assets/assets/projects/S.png": "2dad66d3bb3d4f4661759c1ceea54d87",
"assets/assets/projects/RBanner.png": "28cccde3705b348691be10a4d03672f4",
"assets/assets/img.JPG": "9e20a66742ad81afaa2f774fd75e715c",
"assets/assets/cui.png": "b5608c4d79345ca955f990a24a454554",
"assets/assets/dsc.png": "bd954ceeeb42b91899ebe1c3b0d79850",
"assets/assets/flutterIsl.png": "aaaeddae163a2e71636d9d494e16f2db",
"assets/assets/hi.gif": "cad5918d86b6a7e83f1fb4acead70e4c",
"assets/assets/fonts/agustina.otf": "7b9833076716a8d14eec0cf885a3153c",
"assets/assets/fonts/montserrat.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/3.png": "c4159b4df98a00d8af26df51423ad7c9",
"assets/assets/services/app.png": "9d2da88edb7f550ef24874b306b4ae12",
"assets/assets/services/rapid.png": "8d3ff9fbdddae77403af46662f011ee8",
"assets/assets/services/blog.png": "5e1cbb2c67e2b8ea9ae4bcce0705d2a4",
"assets/assets/services/open.png": "4a5996597d32b06d91183f0860c29aab",
"assets/assets/services/ui.png": "3cf727247752b730a05f51fe0177036f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
