"use strict";(self.webpackChunkpurelipuran=self.webpackChunkpurelipuran||[]).push([[181],{181:(e,s,t)=>{t.d(s,{A:()=>f});var i=t(87),r=t(631),a=t(3),o=t(258),n=t(823),l=t(565),h=t(602),c=t(202),u=t(570);(0,h.V)();const d={url:r.nf,storageKey:r.AQ,autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:r.Rn,flowType:"implicit",debug:!1,hasCustomAuthorizationHeader:!1},_=3e4;async function w(e,s,t){return await t()}class f{constructor(e){var s,t;this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this.initializePromise=null,this.detectSessionInUrl=!0,this.hasCustomAuthorizationHeader=!1,this.suppressGetSessionWarning=!1,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log,this.instanceID=f.nextInstanceID,f.nextInstanceID+=1,this.instanceID>0&&(0,n.Bd)()&&console.warn("Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.");const r=Object.assign(Object.assign({},d),e);if(this.logDebugMessages=!!r.debug,"function"==typeof r.debug&&(this.logger=r.debug),this.persistSession=r.persistSession,this.storageKey=r.storageKey,this.autoRefreshToken=r.autoRefreshToken,this.admin=new i.A({url:r.url,headers:r.headers,fetch:r.fetch}),this.url=r.url,this.headers=r.headers,this.fetch=(0,n.lA)(r.fetch),this.lock=r.lock||w,this.detectSessionInUrl=r.detectSessionInUrl,this.flowType=r.flowType,this.hasCustomAuthorizationHeader=r.hasCustomAuthorizationHeader,r.lock?this.lock=r.lock:(0,n.Bd)()&&(null===(s=null===globalThis||void 0===globalThis?void 0:globalThis.navigator)||void 0===s?void 0:s.locks)?this.lock=u.JS:this.lock=w,this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this)},this.persistSession?r.storage?this.storage=r.storage:(0,n.LJ)()?this.storage=l.y:(this.memoryStorage={},this.storage=(0,l.r)(this.memoryStorage)):(this.memoryStorage={},this.storage=(0,l.r)(this.memoryStorage)),(0,n.Bd)()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(e){console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available",e)}null===(t=this.broadcastChannel)||void 0===t||t.addEventListener("message",(async e=>{this._debug("received broadcast notification from other tab or client",e),await this._notifyAllSubscribers(e.data.event,e.data.session,!1)}))}this.initialize()}_debug(...e){return this.logDebugMessages&&this.logger(`GoTrueClient@${this.instanceID} (${c.r}) ${(new Date).toISOString()}`,...e),this}async initialize(){return this.initializePromise||(this.initializePromise=(async()=>await this._acquireLock(-1,(async()=>await this._initialize())))()),await this.initializePromise}async _initialize(){try{const e=!!(0,n.Bd)()&&await this._isPKCEFlow();if(this._debug("#_initialize()","begin","is PKCE flow",e),e||this.detectSessionInUrl&&this._isImplicitGrantFlow()){const{data:s,error:t}=await this._getSessionFromURL(e);if(t)return this._debug("#_initialize()","error detecting session from URL",t),"Identity is already linked"===(null==t?void 0:t.message)||"Identity is already linked to another user"===(null==t?void 0:t.message)||await this._removeSession(),{error:t};const{session:i,redirectType:r}=s;return this._debug("#_initialize()","detected session in URL",i,"redirect type",r),await this._saveSession(i),setTimeout((async()=>{"recovery"===r?await this._notifyAllSubscribers("PASSWORD_RECOVERY",i):await this._notifyAllSubscribers("SIGNED_IN",i)}),0),{error:null}}return await this._recoverAndRefresh(),{error:null}}catch(e){return(0,a.HY)(e)?{error:e}:{error:new a.HU("Unexpected error during initialization",e)}}finally{await this._handleVisibilityChange(),this._debug("#_initialize()","end")}}async signInAnonymously(e){var s,t,i;try{await this._removeSession();const r=await(0,o.vE)(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{data:null!==(t=null===(s=null==e?void 0:e.options)||void 0===s?void 0:s.data)&&void 0!==t?t:{},gotrue_meta_security:{captcha_token:null===(i=null==e?void 0:e.options)||void 0===i?void 0:i.captchaToken}},xform:o.R_}),{data:a,error:n}=r;if(n||!a)return{data:{user:null,session:null},error:n};const l=a.session,h=a.user;return a.session&&(await this._saveSession(a.session),await this._notifyAllSubscribers("SIGNED_IN",l)),{data:{user:h,session:l},error:null}}catch(e){if((0,a.HY)(e))return{data:{user:null,session:null},error:e};throw e}}async signUp(e){var s,t,i;try{let r;if(await this._removeSession(),"email"in e){const{email:t,password:i,options:a}=e;let l=null,h=null;"pkce"===this.flowType&&([l,h]=await(0,n.dS)(this.storage,this.storageKey)),r=await(0,o.vE)(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,redirectTo:null==a?void 0:a.emailRedirectTo,body:{email:t,password:i,data:null!==(s=null==a?void 0:a.data)&&void 0!==s?s:{},gotrue_meta_security:{captcha_token:null==a?void 0:a.captchaToken},code_challenge:l,code_challenge_method:h},xform:o.R_})}else{if(!("phone"in e))throw new a.U_("You must provide either an email or phone number and a password");{const{phone:s,password:a,options:n}=e;r=await(0,o.vE)(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{phone:s,password:a,data:null!==(t=null==n?void 0:n.data)&&void 0!==t?t:{},channel:null!==(i=null==n?void 0:n.channel)&&void 0!==i?i:"sms",gotrue_meta_security:{captcha_token:null==n?void 0:n.captchaToken}},xform:o.R_})}}const{data:l,error:h}=r;if(h||!l)return{data:{user:null,session:null},error:h};const c=l.session,u=l.user;return l.session&&(await this._saveSession(l.session),await this._notifyAllSubscribers("SIGNED_IN",c)),{data:{user:u,session:c},error:null}}catch(e){if((0,a.HY)(e))return{data:{user:null,session:null},error:e};throw e}}async signInWithPassword(e){try{let s;if(await this._removeSession(),"email"in e){const{email:t,password:i,options:r}=e;s=await(0,o.vE)(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{email:t,password:i,gotrue_meta_security:{captcha_token:null==r?void 0:r.captchaToken}},xform:o.GC})}else{if(!("phone"in e))throw new a.U_("You must provide either an email or phone number and a password");{const{phone:t,password:i,options:r}=e;s=await(0,o.vE)(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{phone:t,password:i,gotrue_meta_security:{captcha_token:null==r?void 0:r.captchaToken}},xform:o.GC})}}const{data:t,error:i}=s;return i?{data:{user:null,session:null},error:i}:t&&t.session&&t.user?(t.session&&(await this._saveSession(t.session),await this._notifyAllSubscribers("SIGNED_IN",t.session)),{data:Object.assign({user:t.user,session:t.session},t.weak_password?{weakPassword:t.weak_password}:null),error:i}):{data:{user:null,session:null},error:new a.Ox}}catch(e){if((0,a.HY)(e))return{data:{user:null,session:null},error:e};throw e}}async signInWithOAuth(e){var s,t,i,r;return await this._removeSession(),await this._handleProviderSignIn(e.provider,{redirectTo:null===(s=e.options)||void 0===s?void 0:s.redirectTo,scopes:null===(t=e.options)||void 0===t?void 0:t.scopes,queryParams:null===(i=e.options)||void 0===i?void 0:i.queryParams,skipBrowserRedirect:null===(r=e.options)||void 0===r?void 0:r.skipBrowserRedirect})}async exchangeCodeForSession(e){return await this.initializePromise,this._acquireLock(-1,(async()=>this._exchangeCodeForSession(e)))}async _exchangeCodeForSession(e){const s=await(0,n.U9)(this.storage,`${this.storageKey}-code-verifier`),[t,i]=(null!=s?s:"").split("/"),{data:r,error:l}=await(0,o.vE)(this.fetch,"POST",`${this.url}/token?grant_type=pkce`,{headers:this.headers,body:{auth_code:e,code_verifier:t},xform:o.R_});return await(0,n.Gb)(this.storage,`${this.storageKey}-code-verifier`),l?{data:{user:null,session:null,redirectType:null},error:l}:r&&r.session&&r.user?(r.session&&(await this._saveSession(r.session),await this._notifyAllSubscribers("SIGNED_IN",r.session)),{data:Object.assign(Object.assign({},r),{redirectType:null!=i?i:null}),error:l}):{data:{user:null,session:null,redirectType:null},error:new a.Ox}}async signInWithIdToken(e){await this._removeSession();try{const{options:s,provider:t,token:i,access_token:r,nonce:n}=e,l=await(0,o.vE)(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,body:{provider:t,id_token:i,access_token:r,nonce:n,gotrue_meta_security:{captcha_token:null==s?void 0:s.captchaToken}},xform:o.R_}),{data:h,error:c}=l;return c?{data:{user:null,session:null},error:c}:h&&h.session&&h.user?(h.session&&(await this._saveSession(h.session),await this._notifyAllSubscribers("SIGNED_IN",h.session)),{data:h,error:c}):{data:{user:null,session:null},error:new a.Ox}}catch(e){if((0,a.HY)(e))return{data:{user:null,session:null},error:e};throw e}}async signInWithOtp(e){var s,t,i,r,l;try{if(await this._removeSession(),"email"in e){const{email:i,options:r}=e;let a=null,l=null;"pkce"===this.flowType&&([a,l]=await(0,n.dS)(this.storage,this.storageKey));const{error:h}=await(0,o.vE)(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{email:i,data:null!==(s=null==r?void 0:r.data)&&void 0!==s?s:{},create_user:null===(t=null==r?void 0:r.shouldCreateUser)||void 0===t||t,gotrue_meta_security:{captcha_token:null==r?void 0:r.captchaToken},code_challenge:a,code_challenge_method:l},redirectTo:null==r?void 0:r.emailRedirectTo});return{data:{user:null,session:null},error:h}}if("phone"in e){const{phone:s,options:t}=e,{data:a,error:n}=await(0,o.vE)(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{phone:s,data:null!==(i=null==t?void 0:t.data)&&void 0!==i?i:{},create_user:null===(r=null==t?void 0:t.shouldCreateUser)||void 0===r||r,gotrue_meta_security:{captcha_token:null==t?void 0:t.captchaToken},channel:null!==(l=null==t?void 0:t.channel)&&void 0!==l?l:"sms"}});return{data:{user:null,session:null,messageId:null==a?void 0:a.message_id},error:n}}throw new a.U_("You must provide either an email or phone number.")}catch(e){if((0,a.HY)(e))return{data:{user:null,session:null},error:e};throw e}}async verifyOtp(e){var s,t;try{let i,r;"email_change"!==e.type&&"phone_change"!==e.type&&await this._removeSession(),"options"in e&&(i=null===(s=e.options)||void 0===s?void 0:s.redirectTo,r=null===(t=e.options)||void 0===t?void 0:t.captchaToken);const{data:a,error:n}=await(0,o.vE)(this.fetch,"POST",`${this.url}/verify`,{headers:this.headers,body:Object.assign(Object.assign({},e),{gotrue_meta_security:{captcha_token:r}}),redirectTo:i,xform:o.R_});if(n)throw n;if(!a)throw new Error("An error occurred on token verification.");const l=a.session,h=a.user;return(null==l?void 0:l.access_token)&&(await this._saveSession(l),await this._notifyAllSubscribers("recovery"==e.type?"PASSWORD_RECOVERY":"SIGNED_IN",l)),{data:{user:h,session:l},error:null}}catch(e){if((0,a.HY)(e))return{data:{user:null,session:null},error:e};throw e}}async signInWithSSO(e){var s,t,i;try{await this._removeSession();let r=null,a=null;return"pkce"===this.flowType&&([r,a]=await(0,n.dS)(this.storage,this.storageKey)),await(0,o.vE)(this.fetch,"POST",`${this.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},"providerId"in e?{provider_id:e.providerId}:null),"domain"in e?{domain:e.domain}:null),{redirect_to:null!==(t=null===(s=e.options)||void 0===s?void 0:s.redirectTo)&&void 0!==t?t:void 0}),(null===(i=null==e?void 0:e.options)||void 0===i?void 0:i.captchaToken)?{gotrue_meta_security:{captcha_token:e.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:r,code_challenge_method:a}),headers:this.headers,xform:o.c2})}catch(e){if((0,a.HY)(e))return{data:null,error:e};throw e}}async reauthenticate(){return await this.initializePromise,await this._acquireLock(-1,(async()=>await this._reauthenticate()))}async _reauthenticate(){try{return await this._useSession((async e=>{const{data:{session:s},error:t}=e;if(t)throw t;if(!s)throw new a.jG;const{error:i}=await(0,o.vE)(this.fetch,"GET",`${this.url}/reauthenticate`,{headers:this.headers,jwt:s.access_token});return{data:{user:null,session:null},error:i}}))}catch(e){if((0,a.HY)(e))return{data:{user:null,session:null},error:e};throw e}}async resend(e){try{"email_change"!=e.type&&"phone_change"!=e.type&&await this._removeSession();const s=`${this.url}/resend`;if("email"in e){const{email:t,type:i,options:r}=e,{error:a}=await(0,o.vE)(this.fetch,"POST",s,{headers:this.headers,body:{email:t,type:i,gotrue_meta_security:{captcha_token:null==r?void 0:r.captchaToken}},redirectTo:null==r?void 0:r.emailRedirectTo});return{data:{user:null,session:null},error:a}}if("phone"in e){const{phone:t,type:i,options:r}=e,{data:a,error:n}=await(0,o.vE)(this.fetch,"POST",s,{headers:this.headers,body:{phone:t,type:i,gotrue_meta_security:{captcha_token:null==r?void 0:r.captchaToken}}});return{data:{user:null,session:null,messageId:null==a?void 0:a.message_id},error:n}}throw new a.U_("You must provide either an email or phone number and a type")}catch(e){if((0,a.HY)(e))return{data:{user:null,session:null},error:e};throw e}}async getSession(){return await this.initializePromise,await this._acquireLock(-1,(async()=>this._useSession((async e=>e))))}async _acquireLock(e,s){this._debug("#_acquireLock","begin",e);try{if(this.lockAcquired){const e=this.pendingInLock.length?this.pendingInLock[this.pendingInLock.length-1]:Promise.resolve(),t=(async()=>(await e,await s()))();return this.pendingInLock.push((async()=>{try{await t}catch(e){}})()),t}return await this.lock(`lock:${this.storageKey}`,e,(async()=>{this._debug("#_acquireLock","lock acquired for storage key",this.storageKey);try{this.lockAcquired=!0;const e=s();for(this.pendingInLock.push((async()=>{try{await e}catch(e){}})()),await e;this.pendingInLock.length;){const e=[...this.pendingInLock];await Promise.all(e),this.pendingInLock.splice(0,e.length)}return await e}finally{this._debug("#_acquireLock","lock released for storage key",this.storageKey),this.lockAcquired=!1}}))}finally{this._debug("#_acquireLock","end")}}async _useSession(e){this._debug("#_useSession","begin");try{const s=await this.__loadSession();return await e(s)}finally{this._debug("#_useSession","end")}}async __loadSession(){this._debug("#__loadSession()","begin"),this.lockAcquired||this._debug("#__loadSession()","used outside of an acquired lock!",(new Error).stack);try{let e=null;const s=await(0,n.U9)(this.storage,this.storageKey);if(this._debug("#getSession()","session from storage",s),null!==s&&(this._isValidSession(s)?e=s:(this._debug("#getSession()","session from storage is not valid"),await this._removeSession())),!e)return{data:{session:null},error:null};const t=!!e.expires_at&&e.expires_at<=Date.now()/1e3;if(this._debug("#__loadSession()",`session has${t?"":" not"} expired`,"expires_at",e.expires_at),!t){if(this.storage.isServer){const s=this.suppressGetSessionWarning;e=new Proxy(e,{get:(e,t,i)=>(s||"user"!==t||console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and many not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."),Reflect.get(e,t,i))})}return{data:{session:e},error:null}}const{session:i,error:r}=await this._callRefreshToken(e.refresh_token);return r?{data:{session:null},error:r}:{data:{session:i},error:null}}finally{this._debug("#__loadSession()","end")}}async getUser(e){return e?await this._getUser(e):(await this.initializePromise,await this._acquireLock(-1,(async()=>await this._getUser())))}async _getUser(e){try{return e?await(0,o.vE)(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:e,xform:o.Cl}):await this._useSession((async e=>{var s,t,i;const{data:r,error:n}=e;if(n)throw n;return(null===(s=r.session)||void 0===s?void 0:s.access_token)||this.hasCustomAuthorizationHeader?await(0,o.vE)(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:null!==(i=null===(t=r.session)||void 0===t?void 0:t.access_token)&&void 0!==i?i:void 0,xform:o.Cl}):{data:{user:null},error:new a.jG}}))}catch(e){if((0,a.HY)(e))return{data:{user:null},error:e};throw e}}async updateUser(e,s={}){return await this.initializePromise,await this._acquireLock(-1,(async()=>await this._updateUser(e,s)))}async _updateUser(e,s={}){try{return await this._useSession((async t=>{const{data:i,error:r}=t;if(r)throw r;if(!i.session)throw new a.jG;const l=i.session;let h=null,c=null;"pkce"===this.flowType&&null!=e.email&&([h,c]=await(0,n.dS)(this.storage,this.storageKey));const{data:u,error:d}=await(0,o.vE)(this.fetch,"PUT",`${this.url}/user`,{headers:this.headers,redirectTo:null==s?void 0:s.emailRedirectTo,body:Object.assign(Object.assign({},e),{code_challenge:h,code_challenge_method:c}),jwt:l.access_token,xform:o.Cl});if(d)throw d;return l.user=u.user,await this._saveSession(l),await this._notifyAllSubscribers("USER_UPDATED",l),{data:{user:l.user},error:null}}))}catch(e){if((0,a.HY)(e))return{data:{user:null},error:e};throw e}}_decodeJWT(e){return(0,n.cM)(e)}async setSession(e){return await this.initializePromise,await this._acquireLock(-1,(async()=>await this._setSession(e)))}async _setSession(e){try{if(!e.access_token||!e.refresh_token)throw new a.jG;const s=Date.now()/1e3;let t=s,i=!0,r=null;const o=(0,n.cM)(e.access_token);if(o.exp&&(t=o.exp,i=t<=s),i){const{session:s,error:t}=await this._callRefreshToken(e.refresh_token);if(t)return{data:{user:null,session:null},error:t};if(!s)return{data:{user:null,session:null},error:null};r=s}else{const{data:i,error:a}=await this._getUser(e.access_token);if(a)throw a;r={access_token:e.access_token,refresh_token:e.refresh_token,user:i.user,token_type:"bearer",expires_in:t-s,expires_at:t},await this._saveSession(r),await this._notifyAllSubscribers("SIGNED_IN",r)}return{data:{user:r.user,session:r},error:null}}catch(e){if((0,a.HY)(e))return{data:{session:null,user:null},error:e};throw e}}async refreshSession(e){return await this.initializePromise,await this._acquireLock(-1,(async()=>await this._refreshSession(e)))}async _refreshSession(e){try{return await this._useSession((async s=>{var t;if(!e){const{data:i,error:r}=s;if(r)throw r;e=null!==(t=i.session)&&void 0!==t?t:void 0}if(!(null==e?void 0:e.refresh_token))throw new a.jG;const{session:i,error:r}=await this._callRefreshToken(e.refresh_token);return r?{data:{user:null,session:null},error:r}:i?{data:{user:i.user,session:i},error:null}:{data:{user:null,session:null},error:null}}))}catch(e){if((0,a.HY)(e))return{data:{user:null,session:null},error:e};throw e}}async _getSessionFromURL(e){try{if(!(0,n.Bd)())throw new a.MR("No browser detected.");if("implicit"===this.flowType&&!this._isImplicitGrantFlow())throw new a.MR("Not a valid implicit grant flow url.");if("pkce"==this.flowType&&!e)throw new a.Uw("Not a valid PKCE flow url.");const s=(0,n.XR)(window.location.href);if(e){if(!s.code)throw new a.Uw("No code detected.");const{data:e,error:t}=await this._exchangeCodeForSession(s.code);if(t)throw t;const i=new URL(window.location.href);return i.searchParams.delete("code"),window.history.replaceState(window.history.state,"",i.toString()),{data:{session:e.session,redirectType:null},error:null}}if(s.error||s.error_description||s.error_code)throw new a.MR(s.error_description||"Error in URL with unspecified error_description",{error:s.error||"unspecified_error",code:s.error_code||"unspecified_code"});const{provider_token:t,provider_refresh_token:i,access_token:r,refresh_token:o,expires_in:l,expires_at:h,token_type:c}=s;if(!(r&&l&&o&&c))throw new a.MR("No session defined in URL");const u=Math.round(Date.now()/1e3),d=parseInt(l);let w=u+d;h&&(w=parseInt(h));const f=w-u;1e3*f<=_&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${f}s, should have been closer to ${d}s`);const y=w-d;u-y>=120?console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",y,w,u):u-y<0&&console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clok for skew",y,w,u);const{data:g,error:v}=await this._getUser(r);if(v)throw v;const p={provider_token:t,provider_refresh_token:i,access_token:r,expires_in:d,expires_at:w,refresh_token:o,token_type:c,user:g.user};return window.location.hash="",this._debug("#_getSessionFromURL()","clearing window.location.hash"),{data:{session:p,redirectType:s.type},error:null}}catch(e){if((0,a.HY)(e))return{data:{session:null,redirectType:null},error:e};throw e}}_isImplicitGrantFlow(){const e=(0,n.XR)(window.location.href);return!(!(0,n.Bd)()||!e.access_token&&!e.error_description)}async _isPKCEFlow(){const e=(0,n.XR)(window.location.href),s=await(0,n.U9)(this.storage,`${this.storageKey}-code-verifier`);return!(!e.code||!s)}async signOut(e={scope:"global"}){return await this.initializePromise,await this._acquireLock(-1,(async()=>await this._signOut(e)))}async _signOut({scope:e}={scope:"global"}){return await this._useSession((async s=>{var t;const{data:i,error:r}=s;if(r)return{error:r};const o=null===(t=i.session)||void 0===t?void 0:t.access_token;if(o){const{error:s}=await this.admin.signOut(o,e);if(s&&(!(0,a.NA)(s)||404!==s.status&&401!==s.status&&403!==s.status))return{error:s}}return"others"!==e&&(await this._removeSession(),await(0,n.Gb)(this.storage,`${this.storageKey}-code-verifier`),await this._notifyAllSubscribers("SIGNED_OUT",null)),{error:null}}))}onAuthStateChange(e){const s=(0,n.uR)(),t={id:s,callback:e,unsubscribe:()=>{this._debug("#unsubscribe()","state change callback with id removed",s),this.stateChangeEmitters.delete(s)}};return this._debug("#onAuthStateChange()","registered callback with id",s),this.stateChangeEmitters.set(s,t),(async()=>{await this.initializePromise,await this._acquireLock(-1,(async()=>{this._emitInitialSession(s)}))})(),{data:{subscription:t}}}async _emitInitialSession(e){return await this._useSession((async s=>{var t,i;try{const{data:{session:i},error:r}=s;if(r)throw r;await(null===(t=this.stateChangeEmitters.get(e))||void 0===t?void 0:t.callback("INITIAL_SESSION",i)),this._debug("INITIAL_SESSION","callback id",e,"session",i)}catch(s){await(null===(i=this.stateChangeEmitters.get(e))||void 0===i?void 0:i.callback("INITIAL_SESSION",null)),this._debug("INITIAL_SESSION","callback id",e,"error",s),console.error(s)}}))}async resetPasswordForEmail(e,s={}){let t=null,i=null;"pkce"===this.flowType&&([t,i]=await(0,n.dS)(this.storage,this.storageKey,!0));try{return await(0,o.vE)(this.fetch,"POST",`${this.url}/recover`,{body:{email:e,code_challenge:t,code_challenge_method:i,gotrue_meta_security:{captcha_token:s.captchaToken}},headers:this.headers,redirectTo:s.redirectTo})}catch(e){if((0,a.HY)(e))return{data:null,error:e};throw e}}async getUserIdentities(){var e;try{const{data:s,error:t}=await this.getUser();if(t)throw t;return{data:{identities:null!==(e=s.user.identities)&&void 0!==e?e:[]},error:null}}catch(e){if((0,a.HY)(e))return{data:null,error:e};throw e}}async linkIdentity(e){var s;try{const{data:t,error:i}=await this._useSession((async s=>{var t,i,r,a,n;const{data:l,error:h}=s;if(h)throw h;const c=await this._getUrlForProvider(`${this.url}/user/identities/authorize`,e.provider,{redirectTo:null===(t=e.options)||void 0===t?void 0:t.redirectTo,scopes:null===(i=e.options)||void 0===i?void 0:i.scopes,queryParams:null===(r=e.options)||void 0===r?void 0:r.queryParams,skipBrowserRedirect:!0});return await(0,o.vE)(this.fetch,"GET",c,{headers:this.headers,jwt:null!==(n=null===(a=l.session)||void 0===a?void 0:a.access_token)&&void 0!==n?n:void 0})}));if(i)throw i;return(0,n.Bd)()&&!(null===(s=e.options)||void 0===s?void 0:s.skipBrowserRedirect)&&window.location.assign(null==t?void 0:t.url),{data:{provider:e.provider,url:null==t?void 0:t.url},error:null}}catch(s){if((0,a.HY)(s))return{data:{provider:e.provider,url:null},error:s};throw s}}async unlinkIdentity(e){try{return await this._useSession((async s=>{var t,i;const{data:r,error:a}=s;if(a)throw a;return await(0,o.vE)(this.fetch,"DELETE",`${this.url}/user/identities/${e.identity_id}`,{headers:this.headers,jwt:null!==(i=null===(t=r.session)||void 0===t?void 0:t.access_token)&&void 0!==i?i:void 0})}))}catch(e){if((0,a.HY)(e))return{data:null,error:e};throw e}}async _refreshAccessToken(e){const s=`#_refreshAccessToken(${e.substring(0,5)}...)`;this._debug(s,"begin");try{const t=Date.now();return await(0,n.PB)((async t=>(t>0&&await(0,n.yy)(200*Math.pow(2,t-1)),this._debug(s,"refreshing attempt",t),await(0,o.vE)(this.fetch,"POST",`${this.url}/token?grant_type=refresh_token`,{body:{refresh_token:e},headers:this.headers,xform:o.R_}))),((e,s)=>{const i=200*Math.pow(2,e);return s&&(0,a.Fw)(s)&&Date.now()+i-t<_}))}catch(e){if(this._debug(s,"error",e),(0,a.HY)(e))return{data:{session:null,user:null},error:e};throw e}finally{this._debug(s,"end")}}_isValidSession(e){return"object"==typeof e&&null!==e&&"access_token"in e&&"refresh_token"in e&&"expires_at"in e}async _handleProviderSignIn(e,s){const t=await this._getUrlForProvider(`${this.url}/authorize`,e,{redirectTo:s.redirectTo,scopes:s.scopes,queryParams:s.queryParams});return this._debug("#_handleProviderSignIn()","provider",e,"options",s,"url",t),(0,n.Bd)()&&!s.skipBrowserRedirect&&window.location.assign(t),{data:{provider:e,url:t},error:null}}async _recoverAndRefresh(){var e;const s="#_recoverAndRefresh()";this._debug(s,"begin");try{const t=await(0,n.U9)(this.storage,this.storageKey);if(this._debug(s,"session from storage",t),!this._isValidSession(t))return this._debug(s,"session is not valid"),void(null!==t&&await this._removeSession());const i=Math.round(Date.now()/1e3),o=(null!==(e=t.expires_at)&&void 0!==e?e:1/0)<i+r.Zc;if(this._debug(s,`session has${o?"":" not"} expired with margin of ${r.Zc}s`),o){if(this.autoRefreshToken&&t.refresh_token){const{error:e}=await this._callRefreshToken(t.refresh_token);e&&(console.error(e),(0,a.Fw)(e)||(this._debug(s,"refresh failed with a non-retryable error, removing the session",e),await this._removeSession()))}}else await this._notifyAllSubscribers("SIGNED_IN",t)}catch(e){return this._debug(s,"error",e),void console.error(e)}finally{this._debug(s,"end")}}async _callRefreshToken(e){var s,t;if(!e)throw new a.jG;if(this.refreshingDeferred)return this.refreshingDeferred.promise;const i=`#_callRefreshToken(${e.substring(0,5)}...)`;this._debug(i,"begin");try{this.refreshingDeferred=new n.cY;const{data:s,error:t}=await this._refreshAccessToken(e);if(t)throw t;if(!s.session)throw new a.jG;await this._saveSession(s.session),await this._notifyAllSubscribers("TOKEN_REFRESHED",s.session);const i={session:s.session,error:null};return this.refreshingDeferred.resolve(i),i}catch(e){if(this._debug(i,"error",e),(0,a.HY)(e)){const t={session:null,error:e};return(0,a.Fw)(e)||(await this._removeSession(),await this._notifyAllSubscribers("SIGNED_OUT",null)),null===(s=this.refreshingDeferred)||void 0===s||s.resolve(t),t}throw null===(t=this.refreshingDeferred)||void 0===t||t.reject(e),e}finally{this.refreshingDeferred=null,this._debug(i,"end")}}async _notifyAllSubscribers(e,s,t=!0){const i=`#_notifyAllSubscribers(${e})`;this._debug(i,"begin",s,`broadcast = ${t}`);try{this.broadcastChannel&&t&&this.broadcastChannel.postMessage({event:e,session:s});const i=[],r=Array.from(this.stateChangeEmitters.values()).map((async t=>{try{await t.callback(e,s)}catch(e){i.push(e)}}));if(await Promise.all(r),i.length>0){for(let e=0;e<i.length;e+=1)console.error(i[e]);throw i[0]}}finally{this._debug(i,"end")}}async _saveSession(e){this._debug("#_saveSession()",e),this.suppressGetSessionWarning=!0,await(0,n.Oi)(this.storage,this.storageKey,e)}async _removeSession(){this._debug("#_removeSession()"),await(0,n.Gb)(this.storage,this.storageKey)}_removeVisibilityChangedCallback(){this._debug("#_removeVisibilityChangedCallback()");const e=this.visibilityChangedCallback;this.visibilityChangedCallback=null;try{e&&(0,n.Bd)()&&(null===window||void 0===window?void 0:window.removeEventListener)&&window.removeEventListener("visibilitychange",e)}catch(e){console.error("removing visibilitychange callback failed",e)}}async _startAutoRefresh(){await this._stopAutoRefresh(),this._debug("#_startAutoRefresh()");const e=setInterval((()=>this._autoRefreshTokenTick()),_);this.autoRefreshTicker=e,e&&"object"==typeof e&&"function"==typeof e.unref?e.unref():"undefined"!=typeof Deno&&"function"==typeof Deno.unrefTimer&&Deno.unrefTimer(e),setTimeout((async()=>{await this.initializePromise,await this._autoRefreshTokenTick()}),0)}async _stopAutoRefresh(){this._debug("#_stopAutoRefresh()");const e=this.autoRefreshTicker;this.autoRefreshTicker=null,e&&clearInterval(e)}async startAutoRefresh(){this._removeVisibilityChangedCallback(),await this._startAutoRefresh()}async stopAutoRefresh(){this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()}async _autoRefreshTokenTick(){this._debug("#_autoRefreshTokenTick()","begin");try{await this._acquireLock(0,(async()=>{try{const e=Date.now();try{return await this._useSession((async s=>{const{data:{session:t}}=s;if(!t||!t.refresh_token||!t.expires_at)return void this._debug("#_autoRefreshTokenTick()","no session");const i=Math.floor((1e3*t.expires_at-e)/_);this._debug("#_autoRefreshTokenTick()",`access token expires in ${i} ticks, a tick lasts 30000ms, refresh threshold is 3 ticks`),i<=3&&await this._callRefreshToken(t.refresh_token)}))}catch(e){console.error("Auto refresh tick failed with error. This is likely a transient error.",e)}}finally{this._debug("#_autoRefreshTokenTick()","end")}}))}catch(e){if(!(e.isAcquireTimeout||e instanceof u.nb))throw e;this._debug("auto refresh token tick lock not available")}}async _handleVisibilityChange(){if(this._debug("#_handleVisibilityChange()"),!(0,n.Bd)()||!(null===window||void 0===window?void 0:window.addEventListener))return this.autoRefreshToken&&this.startAutoRefresh(),!1;try{this.visibilityChangedCallback=async()=>await this._onVisibilityChanged(!1),null===window||void 0===window||window.addEventListener("visibilitychange",this.visibilityChangedCallback),await this._onVisibilityChanged(!0)}catch(e){console.error("_handleVisibilityChange",e)}}async _onVisibilityChanged(e){const s=`#_onVisibilityChanged(${e})`;this._debug(s,"visibilityState",document.visibilityState),"visible"===document.visibilityState?(this.autoRefreshToken&&this._startAutoRefresh(),e||(await this.initializePromise,await this._acquireLock(-1,(async()=>{"visible"===document.visibilityState?await this._recoverAndRefresh():this._debug(s,"acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting")})))):"hidden"===document.visibilityState&&this.autoRefreshToken&&this._stopAutoRefresh()}async _getUrlForProvider(e,s,t){const i=[`provider=${encodeURIComponent(s)}`];if((null==t?void 0:t.redirectTo)&&i.push(`redirect_to=${encodeURIComponent(t.redirectTo)}`),(null==t?void 0:t.scopes)&&i.push(`scopes=${encodeURIComponent(t.scopes)}`),"pkce"===this.flowType){const[e,s]=await(0,n.dS)(this.storage,this.storageKey),t=new URLSearchParams({code_challenge:`${encodeURIComponent(e)}`,code_challenge_method:`${encodeURIComponent(s)}`});i.push(t.toString())}if(null==t?void 0:t.queryParams){const e=new URLSearchParams(t.queryParams);i.push(e.toString())}return(null==t?void 0:t.skipBrowserRedirect)&&i.push(`skip_http_redirect=${t.skipBrowserRedirect}`),`${e}?${i.join("&")}`}async _unenroll(e){try{return await this._useSession((async s=>{var t;const{data:i,error:r}=s;return r?{data:null,error:r}:await(0,o.vE)(this.fetch,"DELETE",`${this.url}/factors/${e.factorId}`,{headers:this.headers,jwt:null===(t=null==i?void 0:i.session)||void 0===t?void 0:t.access_token})}))}catch(e){if((0,a.HY)(e))return{data:null,error:e};throw e}}async _enroll(e){try{return await this._useSession((async s=>{var t,i;const{data:r,error:a}=s;if(a)return{data:null,error:a};const{data:n,error:l}=await(0,o.vE)(this.fetch,"POST",`${this.url}/factors`,{body:{friendly_name:e.friendlyName,factor_type:e.factorType,issuer:e.issuer},headers:this.headers,jwt:null===(t=null==r?void 0:r.session)||void 0===t?void 0:t.access_token});return l?{data:null,error:l}:((null===(i=null==n?void 0:n.totp)||void 0===i?void 0:i.qr_code)&&(n.totp.qr_code=`data:image/svg+xml;utf-8,${n.totp.qr_code}`),{data:n,error:null})}))}catch(e){if((0,a.HY)(e))return{data:null,error:e};throw e}}async _verify(e){return this._acquireLock(-1,(async()=>{try{return await this._useSession((async s=>{var t;const{data:i,error:r}=s;if(r)return{data:null,error:r};const{data:a,error:n}=await(0,o.vE)(this.fetch,"POST",`${this.url}/factors/${e.factorId}/verify`,{body:{code:e.code,challenge_id:e.challengeId},headers:this.headers,jwt:null===(t=null==i?void 0:i.session)||void 0===t?void 0:t.access_token});return n?{data:null,error:n}:(await this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+a.expires_in},a)),await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED",a),{data:a,error:n})}))}catch(e){if((0,a.HY)(e))return{data:null,error:e};throw e}}))}async _challenge(e){return this._acquireLock(-1,(async()=>{try{return await this._useSession((async s=>{var t;const{data:i,error:r}=s;return r?{data:null,error:r}:await(0,o.vE)(this.fetch,"POST",`${this.url}/factors/${e.factorId}/challenge`,{headers:this.headers,jwt:null===(t=null==i?void 0:i.session)||void 0===t?void 0:t.access_token})}))}catch(e){if((0,a.HY)(e))return{data:null,error:e};throw e}}))}async _challengeAndVerify(e){const{data:s,error:t}=await this._challenge({factorId:e.factorId});return t?{data:null,error:t}:await this._verify({factorId:e.factorId,challengeId:s.id,code:e.code})}async _listFactors(){const{data:{user:e},error:s}=await this.getUser();if(s)return{data:null,error:s};const t=(null==e?void 0:e.factors)||[],i=t.filter((e=>"totp"===e.factor_type&&"verified"===e.status));return{data:{all:t,totp:i},error:null}}async _getAuthenticatorAssuranceLevel(){return this._acquireLock(-1,(async()=>await this._useSession((async e=>{var s,t;const{data:{session:i},error:r}=e;if(r)return{data:null,error:r};if(!i)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null};const a=this._decodeJWT(i.access_token);let o=null;a.aal&&(o=a.aal);let n=o;return(null!==(t=null===(s=i.user.factors)||void 0===s?void 0:s.filter((e=>"verified"===e.status)))&&void 0!==t?t:[]).length>0&&(n="aal2"),{data:{currentLevel:o,nextLevel:n,currentAuthenticationMethods:a.amr||[]},error:null}}))))}}f.nextInstanceID=0}}]);
//# sourceMappingURL=181.bundle.js.map