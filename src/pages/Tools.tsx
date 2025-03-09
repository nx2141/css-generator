import React from 'react';
import { Layout } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Tools() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">CSS ツール一覧</h1>
      
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Link
          to="/tools/flexbox"
          className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1"
        >
          <div className="p-6">
            <Layout className="h-8 w-8 text-indigo-600 mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Flexbox ジェネレーター</h2>
            <p className="text-gray-600">
              フレックスボックスレイアウトを視覚的に作成し、必要なコードを生成します。
              Tailwind CSS と Pure CSS の切り替えに対応。
            </p>
          </div>
          <div className="px-6 py-4 bg-gray-50 rounded-b-lg">
            <span className="text-indigo-600 font-medium">ツールを使用する →</span>
          </div>
        </Link>

        <Link
          to="/tools/grid"
          className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1"
        >
          <div className="p-6">
            <Layout className="h-8 w-8 text-indigo-600 mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Grid ジェネレーター</h2>
            <p className="text-gray-600">
              CSS Grid レイアウトを視覚的に設計し、レスポンシブなグリッドを作成。
              複雑なレイアウトも簡単に。
            </p>
          </div>
          <div className="px-6 py-4 bg-gray-50 rounded-b-lg">
            <span className="text-indigo-600 font-medium">ツールを使用する →</span>
          </div>
        </Link>

        <Link
          to="/tools/table"
          className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1"
        >
          <div className="p-6">
            <Layout className="h-8 w-8 text-indigo-600 mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Table ジェネレーター</h2>
            <p className="text-gray-600">
              モダンなテーブルデザインを作成。レスポンシブ対応とスタイリングの
              オプションを完備。
            </p>
          </div>
          <div className="px-6 py-4 bg-gray-50 rounded-b-lg">
            <span className="text-indigo-600 font-medium">ツールを使用する →</span>
          </div>
        </Link>
      </div>
    </div>
  );
}