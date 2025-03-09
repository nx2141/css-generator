import React from 'react';
import { Layout, Wand2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
          CSS ツール コレクション
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          モダンな CSS レイアウトを簡単に生成できるツールセット。
          Flexbox、Grid、Table など、必要なスタイルを視覚的に作成できます。
        </p>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">利用可能なツール</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Link
            to="/tools/flexbox"
            className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"
          >
            <Layout className="h-8 w-8 text-indigo-600 mb-4" />
            <h3 className="text-lg font-medium text-gray-900">Flexbox ジェネレーター</h3>
            <p className="mt-2 text-gray-500">
              フレックスボックスレイアウトを視覚的に作成し、必要なコードを生成します。
            </p>
          </Link>

          <Link
            to="/tools/grid"
            className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"
          >
            <Layout className="h-8 w-8 text-indigo-600 mb-4" />
            <h3 className="text-lg font-medium text-gray-900">Grid ジェネレーター</h3>
            <p className="mt-2 text-gray-500">
              グリッドレイアウトを簡単に作成し、レスポンシブなデザインを実現します。
            </p>
          </Link>

          <Link
            to="/tools/table"
            className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"
          >
            <Layout className="h-8 w-8 text-indigo-600 mb-4" />
            <h3 className="text-lg font-medium text-gray-900">Table ジェネレーター</h3>
            <p className="mt-2 text-gray-500">
              モダンなテーブルデザインを作成し、レスポンシブな表示を実現します。
            </p>
          </Link>
        </div>
      </div>

      <div className="mt-16 bg-indigo-50 rounded-2xl p-8">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <Wand2 className="h-12 w-12 text-indigo-600" />
          </div>
          <div className="ml-4">
            <h2 className="text-2xl font-bold text-gray-900">スタイル切り替え機能</h2>
            <p className="mt-2 text-gray-600">
              各ツールでは、生成されたスタイルを Tailwind CSS と Pure CSS の間で切り替えることができます。
              プロジェクトのニーズに合わせて最適なスタイル形式を選択できます。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}