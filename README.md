# LLM-Speicherplaner / German LLM memory planner

A free, offline-capable German planning tool for dense-transformer inference memory. No dependencies, cookies, analytics or input transmission. Created by [Mineshop](https://mineshop.eu/de), an Irish hardware retailer. Relevant hardware: [KI-Workstations](https://mineshop.eu/de/ai-workstation).

## Use

Open `index.html`, or visit https://mineshop007.github.io/llm-speicher-planer/ . Adjust model parameters, weight precision, format overhead, context, concurrent sequences and KV-cache architecture. Download assumptions and results as CSV. Run `node test.js` to verify the arithmetic.

## Method

- Raw weights (GiB) = parameters × 10^9 × bits / 8 / 2^30.
- Weight-format allowance = raw weights × selected overhead percentage.
- KV-cache (GiB) = 2 × layers × KV heads × head dimension × tokens × concurrent sequences × bytes per value / 2^30.
- Total = raw weights + format allowance + KV-cache + runtime reserve.

The examples are illustrative configurations, not claims about named models. For 32 layers, 8 KV heads, head dimension 128, 8192 tokens, one sequence and FP16 cache, KV memory is exactly 1 GiB. Doubling context or simultaneous sequences doubles this cache term.

This is not a benchmark or a training-memory estimator. Quantized caches need backend support and may have metadata overhead. Sliding-window, MLA, hybrid architectures, MoE residency, vision encoders, multi-GPU distribution and backend buffers require separate analysis. Defaults (15% weight overhead, 2 GiB runtime reserve) are adjustable assumptions, not guarantees. GPU memory advertised in GB must be interpreted consistently. No promised throughput or model fit.

References: [Transformers KV cache](https://huggingface.co/docs/transformers/kv_cache), [llama.cpp](https://github.com/ggml-org/llama.cpp).

## License

MIT License. Copyright (c) 2026 Mining Hardware Limited.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
