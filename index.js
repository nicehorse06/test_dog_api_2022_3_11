let request_dog_api = () => {
    // 實例化XMLHttpRequest方法
    let ourRequest = new XMLHttpRequest();
    // 定義HTTP請求的方法和網址
    ourRequest.open('GET', 'https://dog.ceo/api/breeds/image/random')
    // 定義發送HTTP請求後執行的函式
    ourRequest.onload = () => {
      // 替換dog img圖片
      document.querySelector('img').src = JSON.parse(ourRequest.responseText).message
    }
    // 發送HTTP請求
    ourRequest.send()
}