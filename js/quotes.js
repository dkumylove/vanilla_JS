// 명언 배열
const quotes = [
    {
        quote : "멈춰서도 괜찮아, 아무 이유도 모르는 채 달릴 필요 없어. 꿈이 없어도 괜찮아, 잠시 행복을 느낄 네 순간들이 있다면.",
        author : "낙원",
    },
    {
        quote : "해가 뜨기 전 새벽이 가장 어두우니까 먼 훗날에 넌 지금의 널 절대로 잊지 마 지금 니가 어디 서 있든 잠시 쉬어가는 것일 뿐 포기하지 마 알잖아 너무 멀어지진 마 tomorrow.",
        author : "tomorrow",
    },
    {
        quote : "내가 나인 게 싫은 날 영영 사라지고 싶은 날 문을 하나 만들자 너의 맘 속에다 그 문을 열고 들어가면 이 곳이 기다릴 거야 믿어도 괜찮아 널 위로해줄 Magic Shop.",
        author : "Magic Shop",
    },
    {
        quote : "어쩌면 누군가를 사랑하는 것보다 더 어려운 게 나 자신을 사랑하는 거야 솔직히 인정할 건 인정하자 니가 내린 잣대들은 너에게 더 엄격하단 걸 니 삶 속의 굵은 나이테 그 또한 너의 일부, 너이기에 이제는 나 자신을 용서하자 버리기엔 우리 인생은 길어 미로 속에선 날 믿어 겨울이 지나면 다시 봄은 오는 거야.",
        author : "Answer : Love Myself",
    },
    {
        quote : "I'm the one I should love in this world 빛나는 나를 소중한 내 영혼을 이제야 깨달아 so I love me 좀 부족해도 너무 아름다운 걸.",
        author : "Epiphany",
    },
    {
        quote : "You got me 난 너를 보며 꿈을 꿔 I got you 칠흑 같던 밤들 속 서로가 본 서로의 빛 같은 말을 하고 있었던 거야 우린 가장 깊은 밤에 더 빛나는 별빛.",
        author : "소우주 (Mikrokosmos)​",
    },
    {
        quote : "난 날 믿어 내 등이 아픈 건 날개가 돋기 위함인 걸 날 널 믿어 지금은 미약할지언정 끝은 창대한 비약일 걸 Fly, fly up in the sky fly, fly get 'em up high 니가 택한 길이야 새꺄 쫄지 말어 이제 고작 첫 비행인 걸 uh.",
        author : "Outro : Wings",
    },
    {
        quote : "고마워 내가 나이게 해줘서 이 내가 날게 해줘서 이런 내게 날갤 줘서 꼬깃하던 날 개 줘서 답답하던 날 깨줘서 꿈 속에만 살던 날 깨워줘서 널 생각하면 날 개어서 슬픔 따윈 나 개 줬어 (Thank you 우리가 돼 줘서).",
        author : "Save ME",
    },
    {
        quote : "Like an echo in the forest 하루가 돌아오겠지 아무 일도 없단 듯이 Yeah, life goes on Like an arrow in the blue sky 또 하루 더 날아가지 On my pillow, on my table Yeah, life goes on like this again.",
        author : "Life Goes On",
    },
    {
        quote : "날아갈 수 없음 뛰어 Today we will survive 뛰어갈 수 없음 걸어 Today we will survive 걸어갈 수 없음 기어 기어서라도 gear up 겨눠 총! 조준! 발사!",
        author : "Not Today",
    }   
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// 배열을 랜던으로 가져와 todaysQuaote 변수에 저장
const todaysQuaote = quotes[Math.floor(Math.random() * quotes.length)];

// quote의 Text에 배열을 랜던으로 가져와 todaysQuaote 변수에 저장된 값을 넣음
quote.innerText = todaysQuaote.quote;
author.innerText = todaysQuaote.author;
