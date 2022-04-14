import React, { useState, useEffect } from 'react';
import { Link } from 'umi';
import { plugins } from '@alilc/lowcode-engine';
import registerPlugins from '@/components/Lowcode/plugin';
import EditorView from '@/components/Lowcode/EditorView';

function Lowcode() {
  const [hasPluginInited, setHasPluginInited] = useState(false);

  useEffect(() => {
    registerPlugins()
      .then(() => {
        setHasPluginInited(true);
      })
      .catch((err) => console.error(err));
    return () => {
      plugins.dispose().then(() => {
        console.info('plugins destroy success');
      });
    };
  }, []);

  return (
    <>
      <Link to="/">切换到首页</Link>

      {hasPluginInited && <EditorView />}
    </>
  );
}

export default Lowcode;
