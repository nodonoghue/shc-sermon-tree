const bookOrder = [
    // Old Testament
    "Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy",
    "Joshua", "Judges", "Ruth", "1 Samuel", "2 Samuel", "1 Kings", "2 Kings",
    "1 Chronicles", "2 Chronicles", "Ezra", "Nehemiah", "Esther",
    "Job", "Psalms", "Proverbs", "Ecclesiastes", "Song of Solomon",
    "Isaiah", "Jeremiah", "Lamentations", "Ezekiel", "Daniel",
    "Hosea", "Joel", "Amos", "Obadiah", "Jonah", "Micah", "Nahum",
    "Habakkuk", "Zephaniah", "Haggai", "Zechariah", "Malachi",
    // New Testament
    "Matthew", "Mark", "Luke", "John", "Acts",
    "Romans", "1 Corinthians", "2 Corinthians", "Galatians", "Ephesians",
    "Philippians", "Colossians", "1 Thessalonians", "2 Thessalonians",
    "1 Timothy", "2 Timothy", "Titus", "Philemon",
    "Hebrews", "James", "1 Peter", "2 Peter", "1 John", "2 John", "3 John",
    "Jude", "Revelation"
];

const sermonData = [
    // {  //Template Example
    //     title: "The History of Creation",
    //     date: "2024-01-07",
    //     id: "gen-1",
    //     youtube: "fe_v8NEPzNs",
    //     startTime: 120, // Start at 2 minutes
    //     bookChapters: [
    //         { book: "Genesis", chapter: "Chapter 1" }
    //     ],
    //     topics: ["Creation & Origins"]
    // },
    {
        title: "Expect Something Greater | Week 1 | 1 Peter 1:1-12 | Josh Teis",
        date: "2025-08-10",
        id: "1pet-1-1",
        youtube: "fe_v8NEPzNs",
        bookChapters: [
            { book: "1 Peter", chapters: ["Chapter 1"] }
        ],
        topics: ["Faith & Trust", "Christian Life"]
    },
    {
        title: "How Do Disciples Live Differently? | Week 2 | 1 Peter 1:13-25 | Josh Teis ",
        date: "2025-08-17",
        id: "1pet-1-2",
        youtube: "PVWT3lRUU6c",
        bookChapters: [
            { book: "1 Peter", chapters: ["Chapter 1"] }
        ],
        topics: ["Christian Life"]
    },
    {
        title: "What Is Your Spiritual Diet? | Week 3 | 1 Peter 2:1-12 | Josh Teis",
        date: "2025-08-24",
        id: "1pet-2-1",
        youtube: "fS0fCCVw_9M",
        bookChapters: [
            { book: "1 Peter", chapters: ["Chapter 2"] }
        ],
        topics: ["Christian Life"]
    },
    {
        title: "Why Does God Have Me Here? | Week 4 | 1 Peter 2:11-25 | Josh Teis",
        date: "2025-08-31",
        id: "1pet-2-2",
        youtube: "sjVzkmOX1xo",
        bookChapters: [
            { book: "1 Peter", chapters: ["Chapter 2"] }
        ],
        topics: ["Christian Life"]
    },
    {
        title: "Thread Week 1 | Redemption in Genesis | Josh Teis",
        date: "2017-02-11",
        id: "thread-week-1",
        youtube: "pi3j2dPQmTA",
        bookChapters: null,
        topics: ["Redemption"]
    },
    {
        title: "Thread Week 2 | Redemption in Joshua | Josh Teis",
        date: "2017-02-11",
        id: "thread-week-2",
        youtube: "fCc2-2qu6-8",
        bookChapters: null,
        topics: ["Redemption"]
    },
    {
        title: "Thread Week 3 | Redemption from 1 Samuel to Malachi | Josh Teis",
        date: "2017-02-12",
        id: "thread-week-3",
        youtube: "k0qs5Z7-zVY",
        startTime: 1283,
        bookChapters: null,
        topics: ["Redemption"]
    },
    {
        title: "Thread Week 4 | Redemption in the Life of Jesus | Josh Teis",
        date: "2017-02-12",
        id: "thread-week-3",
        youtube: "GwnzAoO08BA",
        bookChapters: null,
        topics: ["Redemption"]
    },
    {
        title: "Thread Week 5 | Redemption from Acts to Revelation | Josh Teis",
        date: "2017-02-13",
        id: "thread-week-4",
        youtube: "GceEOFLQwu0",
        bookChapters: null,
        topics: ["Redemption"]
    },
    {
        title: "Beyond | Church Planting | Josh Teis",
        date: "2017-09-16",
        id: "beyond-1",
        youtube: "QWM7ntkf93Q",
        bookChapters: null,
        topics: ["Church Planting"]
    },
    {
        title: "Clear Answers- Part 1 | Apologetics | Josh Teis",
        date: "2017-02-19",
        id: "clear-answers-part-1",
        youtube: "BmPF5o3GmdI",
        bookChapters: [
            { book: "2 Timothy", chapters: ["Chapter 2"] }
        ],
        topics: ["Apologetics", "Faith"]
    },
    {
        title: "Clear Answers- Part 2 | Apologetics | Ben Schettler",
        date: "2017-02-26",
        id: "clear-answers-part-2",
        youtube: "9udLFQ8gMt4",
        bookChapters: null,
        topics: ["Apologetics", "Faith"]
    },
    {
        title: "Clear Answers- Part 3 | Apologetics | Ezer Kalmovitcz",
        date: "2017-03-04",
        id: "clear-answers-part-3",
        youtube: "cLU2OK6_4CU",
        bookChapters: null,
        topics: ["Apologetics", "Faith"]
    },
    {
        title: "Clear Answers- Part 4 | Apologetics | Ben Schettler",
        date: "2017-03-05",
        id: "clear-answers-part-4",
        youtube: "aWP37ycK0Q0",
        bookChapters: null,
        topics: ["Apologetics", "Faith"]
    },
    {
        title: "Royalty- Part 1 | 2 Samuel 4:4, 9:1-12 | Josh Teis",
        date: "2017-03-12",
        id: "royalty-part-1",
        youtube: "tlIfCAtTT_s",
        bookChapters: [
            { book: "2 Samuel", chapters: ["Chapter 4", "Chapter 9"] },
        ],
        topics: ["Identity"]
    },
    {
        title: "Royalty- Part 2 | Hebrews 8:12; Isaiah 61:10; II Peter 1:5-9 | Josh Teis",
        date: "2017-03-19",
        id: "royalty-part-2",
        youtube: "31PIbdF6Hyg",
        bookChapters: [
            { book: "Hebrews", chapters: ["Chapter 8"] },
            { book: "Isaiah", chapters: ["Chapter 61"] },
            { book: "2 Peter", chapters: ["Chapter 1"] },
        ],
        topics: ["Identity"]
    },
    {
        title: "Royalty- Part 3 | Romans 8:28-39 | Josh Teis",
        date: "2017-03-26",
        id: "royalty-part-3",
        youtube: "E2M-Tu9asm0",
        bookChapters: [
            { book: "Romans", chapters: ["Chapter 8"] },
        ],
        topics: ["Identity"]
    },
    {
        title: "Uprising- Part 1 | Romans 12:2-3 | Josh Teis",
        date: "2017-04-02",
        id: "uprising-part-1",
        youtube: "3YSrjfCZWeQ",
        bookChapters: [
            { book: "Romans", chapters: ["Chapter 12"] },
        ],
        topics: ["Discipleship", "Christian Life"]
    },
    {
        title: "Uprising- Part 2 | Luke 19:36-38 | Josh Teis",
        date: "2017-04-09",
        id: "uprising-part-2",
        youtube: "uh0kjn4YWRc",
        bookChapters: [
            { book: "Luke", chapters: ["Chapter 19"] },
        ],
        topics: ["Discipleship", "Christian Life"]
    },
    {
        title: "Done for Me, Do for Others- Part 1 | I Corinthians 15:55, 57 | Josh Teis",
        date: "2017-04-16",
        id: "done-for-me-part-1",
        youtube: "uh0kjn4YWRc",
        bookChapters: [
            { book: "1 Corinthians", chapters: ["Chapter 15"] },
        ],
        topics: null
    },
    {
        title: "Done for Me, Do for Others- Part 2 | Luke 19:36-38 | Steve Miller",
        date: "2017-04-23",
        id: "done-for-me-part-2",
        youtube: "Sb9jkT5842E",
        bookChapters: [
            { book: "Luke", chapters: ["Chapter 19"] },
        ],
        topics: null
    },
];