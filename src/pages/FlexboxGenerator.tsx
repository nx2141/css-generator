import React, { useState } from 'react';

type FlexProperty = {
  display: 'flex' | 'inline-flex';
  flexDirection: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  justifyContent: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  alignItems: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  flexWrap: 'nowrap' | 'wrap' | 'wrap-reverse';
  gap: string;
};

type StyleType = 'tailwind' | 'pure-css';

export default function FlexboxGenerator() {
  const [flexProps, setFlexProps] = useState<FlexProperty>({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    gap: '1rem',
  });

  const [numItems, setNumItems] = useState(3);
  const [styleType, setStyleType] = useState<StyleType>('tailwind');

  const updateProperty = (property: keyof FlexProperty, value: string) => {
    setFlexProps(prev => ({ ...prev, [property]: value }));
  };

  const containerStyle = styleType === 'tailwind' ? {} : {
    ...flexProps,
    minHeight: '200px',
  };

  const getTailwindClasses = () => {
    const classes = [
      flexProps.display,
      {
        'flex-row': flexProps.flexDirection === 'row',
        'flex-row-reverse': flexProps.flexDirection === 'row-reverse',
        'flex-col': flexProps.flexDirection === 'column',
        'flex-col-reverse': flexProps.flexDirection === 'column-reverse',
      },
      {
        'justify-start': flexProps.justifyContent === 'flex-start',
        'justify-end': flexProps.justifyContent === 'flex-end',
        'justify-center': flexProps.justifyContent === 'center',
        'justify-between': flexProps.justifyContent === 'space-between',
        'justify-around': flexProps.justifyContent === 'space-around',
        'justify-evenly': flexProps.justifyContent === 'space-evenly',
      },
      {
        'items-start': flexProps.alignItems === 'flex-start',
        'items-end': flexProps.alignItems === 'flex-end',
        'items-center': flexProps.alignItems === 'center',
        'items-stretch': flexProps.alignItems === 'stretch',
        'items-baseline': flexProps.alignItems === 'baseline',
      },
      {
        'flex-nowrap': flexProps.flexWrap === 'nowrap',
        'flex-wrap': flexProps.flexWrap === 'wrap',
        'flex-wrap-reverse': flexProps.flexWrap === 'wrap-reverse',
      },
      `gap-${flexProps.gap.replace('rem', '')}`
    ];

    return Object.entries(classes).reduce((acc, [_, value]) => {
      if (typeof value === 'string') return `${acc} ${value}`;
      return `${acc} ${Object.keys(value).find(key => value[key]) || ''}`;
    }, '');
  };

  const getGeneratedCode = () => {
    if (styleType === 'tailwind') {
      return `<div class="${getTailwindClasses().trim()}">
  <!-- コンテンツをここに配置 -->
</div>`;
    }

    return `.container {
  display: ${flexProps.display};
  flex-direction: ${flexProps.flexDirection};
  justify-content: ${flexProps.justifyContent};
  align-items: ${flexProps.alignItems};
  flex-wrap: ${flexProps.flexWrap};
  gap: ${flexProps.gap};
}`;
  };

  return (
    <main className="max-w-6xl mx-auto p-8">
      <div className="flex items-center gap-4 mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Flexbox ジェネレーター</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Controls */}
        <div className="lg:col-span-4 space-y-6 bg-white p-6 rounded-lg shadow-md">
          <div className="space-y-2">
            <span className="text-sm font-medium text-gray-700">スタイル形式</span>
            <div className="flex rounded-lg overflow-hidden">
              <button
                className={`flex-1 px-4 py-2 text-sm font-medium ${
                  styleType === 'tailwind'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                } transition-colors`}
                onClick={() => setStyleType('tailwind')}
              >
                Tailwind CSS
              </button>
              <button
                className={`flex-1 px-4 py-2 text-sm font-medium ${
                  styleType === 'pure-css'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                } transition-colors`}
                onClick={() => setStyleType('pure-css')}
              >
                Pure CSS
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">表示タイプ</label>
            <select
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={flexProps.display}
              onChange={(e) => updateProperty('display', e.target.value)}
            >
              <option value="flex">flex</option>
              <option value="inline-flex">inline-flex</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">フレックス方向</label>
            <select
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={flexProps.flexDirection}
              onChange={(e) => updateProperty('flexDirection', e.target.value)}
            >
              <option value="row">横方向</option>
              <option value="row-reverse">横方向（逆順）</option>
              <option value="column">縦方向</option>
              <option value="column-reverse">縦方向（逆順）</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">主軸の配置</label>
            <select
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={flexProps.justifyContent}
              onChange={(e) => updateProperty('justifyContent', e.target.value)}
            >
              <option value="flex-start">先頭揃え</option>
              <option value="flex-end">末尾揃え</option>
              <option value="center">中央揃え</option>
              <option value="space-between">両端揃え</option>
              <option value="space-around">均等配置（余白あり）</option>
              <option value="space-evenly">均等配置</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">交差軸の配置</label>
            <select
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={flexProps.alignItems}
              onChange={(e) => updateProperty('alignItems', e.target.value)}
            >
              <option value="flex-start">先頭揃え</option>
              <option value="flex-end">末尾揃え</option>
              <option value="center">中央揃え</option>
              <option value="stretch">引き伸ばし</option>
              <option value="baseline">ベースライン揃え</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">折り返し</label>
            <select
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={flexProps.flexWrap}
              onChange={(e) => updateProperty('flexWrap', e.target.value)}
            >
              <option value="nowrap">折り返しなし</option>
              <option value="wrap">折り返しあり</option>
              <option value="wrap-reverse">折り返しあり（逆順）</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">間隔</label>
            <input
              type="text"
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={flexProps.gap}
              onChange={(e) => updateProperty('gap', e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">アイテム数</label>
            <input
              type="number"
              min="1"
              max="12"
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={numItems}
              onChange={(e) => setNumItems(Math.min(12, Math.max(1, parseInt(e.target.value) || 1)))}
            />
          </div>
        </div>

        {/* Preview */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">プレビュー</h2>
            <div
              style={containerStyle}
              className={`border-2 border-dashed border-gray-300 rounded-lg p-4 bg-gray-50 min-h-[200px] ${
                styleType === 'tailwind' ? getTailwindClasses() : ''
              }`}
            >
              {Array.from({ length: numItems }).map((_, index) => (
                <div
                  key={index}
                  className="bg-indigo-500 text-white p-4 rounded flex items-center justify-center"
                  style={{ minWidth: '100px', minHeight: '100px' }}
                >
                  項目 {index + 1}
                </div> ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">生成されたコード</h2>
            <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto">
              {getGeneratedCode()}
            </pre>
          </div>
        </div>
      </div>
    </main>
  );
}