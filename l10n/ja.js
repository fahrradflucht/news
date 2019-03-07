OC.L10N.register(
    "news",
    {
    "Request failed, network connection unavailable!" : "リクエストに失敗しました。ネットワーク接続が利用できません！",
    "Request unauthorized. Are you logged in?" : "リクエストは認証されていません。ログインしていますか？",
    "Request forbidden. Are you an admin?" : "リクエストは禁止されています。あなたは管理者でしょうか?",
    "Token expired or app not enabled! Reload the page!" : "トークンまたはアプリが無効になりました！ページを再読込してください！",
    "Internal server error! Please check your data/nextcloud.log file for additional information!" : "内部サーバーエラー！追加情報については、あなたのdata/nextcloud.logファイルをチェックしてください！",
    "Request failed, Nextcloud is in currently in maintenance mode!" : "リクエストが失敗しました。Nextcloudは現在メンテナンスモードです。",
    "Can not add feed: Exists already" : "フィードを追加できません: すでに存在します",
    "Articles without feed" : "フィードなし記事",
    "Can not add folder: Exists already" : "フォルダーを追加できません: すでに存在します",
    "News" : "ニュース",
    "An RSS/Atom feed reader" : "RSS/Atom フィードリーダー",
    "Use system cron for updates" : "更新のためにOSのcronを使用",
    "Disable this if you run a custom updater such as the Python updater included in the app" : "アプリに含まれるPython アップデータのようなカスタムアップデータを使用する場合は無効にしてください",
    "Purge interval" : "パージ周期",
    "Minimum amount of seconds after deleted feeds and folders are removed from the database; values below 60 seconds are ignored" : "削除されたフィードとフォルダーがデータベースから削除されるまでの秒数；60秒以下の値は無視されます",
    "Maximum read count per feed" : "フィード当たりの最大閲覧数",
    "Defines the maximum amount of articles that can be read per feed which won't be deleted by the cleanup job; if old articles reappear after being read, increase this value; negative values such as -1 will turn this feature off" : "フィード毎に読み込むことができる最大の記事数を定義して、クリーンナップジョブで削除されない数を決めます；もし、読んだ記事が再度表示されるならば、この値を増やしてみてください；-1 などの負の値でこの機能は無効になります。",
    "Maximum redirects" : "最大リダイレクト数",
    "How many redirects the feed fetcher should follow" : "フィードフェッチャーに許可するリダイレクト数",
    "Maximum feed page size" : "最大フィードページサイズ",
    "Maximum feed size in bytes. If the RSS/Atom page is bigger than this value, the update will be aborted" : "最大フィードサイズのバイト数。RSS/Atomページが設定値より大きい場合､更新は中止されます。",
    "Feed fetcher timeout" : "フィードフェッチャーのタイムアウト",
    "Maximum number of seconds to wait for an RSS or Atom feed to load; if it takes longer the update will be aborted" : "RSS / Atom フィードの読み込み待機秒数の制限;設定時間より長くかかる場合はアップデートが中止されます。",
    "Explore Service URL" : "サービスURLの探索",
    "If given, this service's URL will be queried for displaying the feeds in the explore feed section. To fall back to the built in explore service, leave this input empty" : "指定された場合は、このサービスのURLは探索フィードセクションでフィードを表示するために照会されます。内蔵の探索サービスへ戻すには、この項目を空欄にしてください",
    "For more information check the wiki" : "詳しい情報はWikiを確認してください",
    "Saved" : "保存しました",
    "Download" : "ダウンロード",
    "Close" : "閉じる",
    "filter" : "フィルター",
    "Language" : "言語",
    "Subscribe" : "購読",
    "Got more awesome feeds? Share them with us!" : "すばらしいフィードは増えましたか？私たちと共有しましょう！",
    "No articles available" : "記事がありません",
    "No unread articles available" : "未読記事がありません",
    "Open website" : "ウェブサイトを開く",
    "Star article" : "スター付きの記事",
    "Unstar article" : "スターなしの記事",
    "Keep article unread" : "記事を未読のままにする",
    "Remove keep article unread" : "記事の未読保持を解除",
    "by" : "by",
    "from" : "開始",
    "Play audio" : "音楽を再生",
    "Download video" : "動画をダウンロード",
    "Download audio" : "音楽をダウンロード",
    "Keyboard shortcut" : "キーボードショートカット",
    "Description" : "説明",
    "right" : "右",
    "Jump to next article" : "次の記事へジャンプ",
    "left" : "左",
    "Jump to previous article" : "前の記事へジャンプ",
    "Toggle star article" : "スター付きの記事を切り替え",
    "Star article and jump to next one" : "記事にスターを付けて次へ",
    "Toggle keep current article unread" : "現在の記事の未読を切り替え",
    "Open article in new tab" : "新しいタブで記事を開く",
    "Toggle expand article in compact view" : "コンパクトビューでの記事の拡張の切り替え",
    "Refresh" : "同期",
    "Load next feed" : "次のフィードを読み込む",
    "Load previous feed" : "前のフィードを読み込む",
    "Load next folder" : "次のフォルダーを読み込む",
    "Load previous folder" : "前のフォルダーを読み込む",
    "Scroll to active navigation entry" : "アクティブなナビゲーションエントリーにスクロール",
    "Focus search field" : "検索フィールドにフォーカス",
    "Mark current article's feed/folder read" : "現在の記事のフィード/フォルダーを既読にする",
    "Ajax or webcron mode detected! Your feeds will not be updated!" : "Ajax か Web cron モードになっています。フィードは自動的に更新されません。",
    "How to set up the operating system cron" : "OSのcronのやり方",
    "Install and set up a faster parallel updater that uses the News app's update API" : "ニュースアプリのアップデートAPIを使用する、高速な並列アップデーターをインストールして、設定します。",
    "Non UTF-8 charset for MySQL/MariaDB database detected!" : "MySQL/MariaDB データベース の charset が UTF-8 ではありません。",
    "Learn how to convert your database to utf8mb4 (make a backup beforehand)" : "データベースを utf8mb4 に変換する方法を理解する(その前にバックアップを取ってください)",
    "Web address" : "WEBアドレス",
    "Feed exists already!" : "フィードはすでに存在します！",
    "Folder" : "フォルダー",
    "No folder" : "フォルダーはありません",
    "New folder" : "新しいフォルダー",
    "Folder name" : "フォルダー名",
    "Go back" : "戻る",
    "Folder exists already!" : "フォルダーはすでに存在します！",
    "Advanced settings" : "詳細設定",
    "Credentials" : "資格情報",
    "HTTP Basic Auth credentials must be stored unencrypted! Everyone with access to the server or database will be able to access them!" : "HTTP ベーシック認証の認証情報は暗号化せずに保管する必要があります。その為、サーバーやデータベースにアクセスできる人はすべてこの情報を見ることができます。",
    "Username" : "ユーザー名",
    "Password" : "パスワード",
    "New Folder" : "フォルダーを作成する",
    "Create" : "作成",
    "Explore" : "探索",
    "Update failed more than 50 times" : "フィードの更新に50回以上失敗しました",
    "Deleted feed" : "削除されたフィード",
    "Undo delete feed" : "削除したフィードを元に戻す",
    "Rename" : "名前の変更",
    "Menu" : "メニュー",
    "Mark read" : "既読にする",
    "Unpin from top" : "トップからピンを外す",
    "Pin to top" : "トップにピン",
    "Newest first" : "新しい順",
    "Oldest first" : "古い順",
    "Default order" : "デフォルト順",
    "Enable full text" : "全文検索を有効",
    "Disable full text" : "全文検索を無効",
    "Unread updated" : "更新を未読",
    "Ignore updated" : "更新を無視",
    "Open feed URL" : "フィードURLを開く",
    "Delete" : "削除",
    "Dismiss" : "閉じる",
    "Collapse" : "折りたたむ",
    "Deleted folder" : "削除されたフォルダー",
    "Undo delete folder" : "削除したフォルダーを元に戻す",
    "Starred" : "共有",
    "Unread articles" : "未読の記事",
    "All articles" : "すべての記事",
    "Settings" : "設定",
    "Disable mark read through scrolling" : "スクロール時の既読マークを無効化",
    "Compact view" : "コンパクト表示",
    "Expand articles on key navigation" : "キーナビゲーションで記事を展開",
    "Show all articles" : "すべての記事を表示",
    "Reverse ordering (oldest on top)" : "逆順",
    "Subscriptions (OPML)" : "RSS購読リスト (OPML)",
    "Import" : "インポート",
    "Export" : "エクスポート",
    "Error when importing: File does not contain valid OPML" : "インポート中のエラー: ファイルは有効なOPMLを含んでいません",
    "Error when importing: OPML is does neither contain feeds nor folders" : "インポートエラー: OPML はフィードもフォルダーも含んでいません",
    "Unread/Starred Articles" : "未読/注目記事",
    "Error when importing: file does not contain valid JSON" : "インポート中のエラー: ファイルは有効なJSONを含んでいません",
    "Help" : "ヘルプ",
    "Keyboard shortcuts" : "キーボードショートカット",
    "Documentation" : "ドキュメント",
    "Report a bug" : "バグを報告"
},
"nplurals=1; plural=0;");
