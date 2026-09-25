/* Approximate dense-transformer inference memory. Not a benchmark. */
(function(root){
  function estimate(p){
    for(const k of ['parameters','bits','overhead','layers','kvHeads','headDim','context','parallel','kvBytes','reserve']) {
      if(!Number.isFinite(p[k]) || p[k]<0) throw new Error('Ungültiger Wert: '+k);
    }
    if(!p.parameters || !p.bits || !p.layers || !p.kvHeads || !p.headDim || !p.context || !p.parallel || !p.kvBytes) throw new Error('Alle Größen außer Reserve und Aufschlag müssen positiv sein.');
    const weights=p.parameters*1e9*p.bits/8/2**30;
    const quantOverhead=weights*p.overhead/100;
    const kv=2*p.layers*p.kvHeads*p.headDim*p.context*p.parallel*p.kvBytes/2**30;
    return {weights,quantOverhead,kv,reserve:p.reserve,total:weights+quantOverhead+kv+p.reserve};
  }
  if(typeof module!=='undefined') module.exports={estimate};
  root.estimate=estimate;
})(typeof window==='undefined'?globalThis:window);
