import{o as t,c as e,a}from"./app.efa7101f.js";const s='{"title":"Services Types","description":"","frontmatter":{"title":"Services Types"},"headers":[{"level":2,"title":"View","slug":"view"},{"level":3,"title":"Service Type List","slug":"service-type-list"},{"level":3,"title":"Service Type Create","slug":"service-type-create"},{"level":2,"title":"Tables","slug":"tables"},{"level":3,"title":"AvailableServiceType","slug":"availableservicetype"},{"level":3,"title":"AvailableServiceTypeDeliverable","slug":"availableservicetypedeliverable"}],"relativePath":"service-types.md","lastUpdated":1626706925873}',n={},r=a('<h2 id="view"><a class="header-anchor" href="#view" aria-hidden="true">#</a> View</h2><h3 id="service-type-list"><a class="header-anchor" href="#service-type-list" aria-hidden="true">#</a> Service Type List</h3><p>Role Permission: ViewServiceTypes​ = 19</p><ul><li>Service Type Names</li><li>Active</li></ul><h4 id="fetch-list-query"><a class="header-anchor" href="#fetch-list-query" aria-hidden="true">#</a> Fetch List Query</h4><div class="language-csharp"><pre><code><span class="token class-name"><span class="token keyword">var</span></span> result <span class="token operator">=</span> ctx<span class="token punctuation">.</span>ObjectContext<span class="token punctuation">.</span>AvailableServiceTypes\n  <span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span>s <span class="token operator">=&gt;</span> s<span class="token punctuation">.</span>ParentId <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> s<span class="token punctuation">.</span>Name <span class="token operator">!=</span> <span class="token string">&quot;Other&quot;</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">Select</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> result<span class="token punctuation">.</span><span class="token function">OrderBy</span><span class="token punctuation">(</span>a <span class="token operator">=&gt;</span> a<span class="token punctuation">.</span>Id<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">ApplyQueryLogic</span><span class="token punctuation">(</span>queryLogic<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">Select</span><span class="token punctuation">(</span>s <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ServiceTypeListItemDTO</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token punctuation">}</span>​\n</code></pre></div><h3 id="service-type-create"><a class="header-anchor" href="#service-type-create" aria-hidden="true">#</a> Service Type Create</h3><p>Role Permission: AddServiceType = 39</p><table><thead><tr><th>Field</th><th>Validation Rules</th></tr></thead><tbody><tr><td>Service Type Name</td><td>required</td></tr><tr><td>Short Name</td><td>required</td></tr><tr><td>Has Quantity</td><td></td></tr><tr><td>Is Active</td><td></td></tr><tr><td>Display Calendar</td><td></td></tr><tr><td>Requires Date</td><td></td></tr><tr><td>Requires Phone</td><td></td></tr><tr><td>Customer Description</td><td></td></tr><tr><td>On External Form</td><td></td></tr><tr><td>Deliverables</td><td></td></tr><tr><td>Duration (in minutes)</td><td>required</td></tr></tbody></table><h2 id="tables"><a class="header-anchor" href="#tables" aria-hidden="true">#</a> Tables</h2><h3 id="availableservicetype"><a class="header-anchor" href="#availableservicetype" aria-hidden="true">#</a> <code>AvailableServiceType</code></h3><table><thead><tr><th>Column</th><th>FK</th></tr></thead><tbody><tr><td>Id</td><td></td></tr><tr><td>CreatedBy</td><td>FK_AvailableServiceType_User_CreatedBy</td></tr><tr><td>CreatedOn</td><td></td></tr><tr><td>CustomerDescription</td><td></td></tr><tr><td>HasDescription</td><td></td></tr><tr><td>HasQuantity</td><td></td></tr><tr><td>IsActive</td><td></td></tr><tr><td>Name</td><td></td></tr><tr><td>OnExternalForm</td><td></td></tr><tr><td>ParentId</td><td>FK_AvailableServiceType_AvailableServiceType_ParentId</td></tr><tr><td>RequiresDate</td><td></td></tr><tr><td>RequiresPhone</td><td></td></tr><tr><td>ShortName</td><td></td></tr><tr><td>RowVersion</td><td></td></tr><tr><td>ShowCalendar</td><td></td></tr><tr><td>Duration</td><td></td></tr></tbody></table><h3 id="availableservicetypedeliverable"><a class="header-anchor" href="#availableservicetypedeliverable" aria-hidden="true">#</a> <code>AvailableServiceTypeDeliverable</code></h3><table><thead><tr><th>Column</th><th>FK</th></tr></thead><tbody><tr><td>AvailableServiceTypeId</td><td>FK_AvailableServiceTypeDeliverable_AvailableServiceType_AvailableServiceTypeId</td></tr><tr><td>AssetTypeId</td><td>FK_AvailableServiceTypeDeliverable_MasterAssetType_AssetTypeId</td></tr></tbody></table>',14);n.render=function(a,s,n,d,i,p){return t(),e("div",null,[r])};export default n;export{s as __pageData};
