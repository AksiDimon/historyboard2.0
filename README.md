# HistoryBoard

> 🚀 **GitHub Pages (gh-pages) deployed** — просмотрите демо по адресу:  
> **https://aksidimon.github.io/historyBoard/**

---
**HistoryBoard** — независимый React-компонент, который отображает временные отрезки в виде точек по окружности и помогает интерактивно просматривать ключевые события каждого периода.

---


## ✨ Особенности

- **Временные отрезки (2–6)** равномерно располагаются как точки по периметру круга.  
- **Интерактивная навигация**: кликом по точке или стрелкам карусели переключает активный период.  
- **Карусель событий**: под числами показываются подробности ключевых событий текущего периода.  
- **Drag-to-scroll** с поддержкой мыши и тачпада, реализована плавная инерция.  
- **Hover-эффекты**: точки «растут» при наведении, стрелки становятся жирнее.  
- **Адаптивность**: резиновая вёрстка с `flex`, `clamp()`, `vw/vh` — без лишних медиазапросов.  
- **Изоляция**: несколько экземпляров компонента на странице полностью независимы друг от друга.

---

## 🛠️ Установка

```bash
git clone https://aksidimon.github.io/historyboard2.0/
cd historyBoard
npm install
# или
yarn install



## 🚀 Использование

```tsx
import React, { useState } from 'react';
import { BlockCarousel } from './components/BlockCarousel';
import { SphereBlock } from './components/mock/types';

const data: SphereBlock[] = [ /* ... */ ];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <BlockCarousel
      blocks={data}
      currentIndex={currentIndex}
      onPrev={() => setCurrentIndex(i => Math.max(i - 1, 0))}
      onNext={() => setCurrentIndex(i => Math.min(i + 1, data.length - 1))}
    />
  );
}

export default App;

## 📑 API

### `<BlockCarousel>`

| Проп           | Тип              | Описание                                          |
| -------------- | ---------------- | ------------------------------------------------- |
| `blocks`       | `SphereBlock[]`  | Массив периодов — каждый блок содержит `nameBlock` и массив `data` с событиями |
| `currentIndex` | `number`         | Текущий активный индекс периода                   |
| `onPrev`       | `() => void`     | Коллбэк для переключения на предыдущий период     |
| `onNext`       | `() => void`     | Коллбэк для переключения на следующий период      |

```ts
// Описание типов данных
interface  AllComponentsProps {
  response: SphereBlock[],
  currentIndex: number,
  onNext: () => void;
  onPrev: () => void;
}

interface SwipeOptions {
  onNext: () => void;
  onPrev: () => void;
  threshold?: number;
}

interface OverFlowSliderProps {
    viewportRef: React.RefObject<HTMLDivElement | null>
    currentIndex: number
}
