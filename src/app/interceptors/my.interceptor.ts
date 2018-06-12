import { HttpEvent , HttpHandler , HttpInterceptor , HttpRequest } from "@angular/common/http";
import { Injectable }                                              from "@angular/core";
import "rxjs/add/operator/do";

import { Observable }  from "rxjs/Observable";
import { environment } from "../../environments/environment";

@Injectable ()
export class MyInterceptor implements HttpInterceptor {
  intercept ( req : HttpRequest<any> , next : HttpHandler ) : Observable<HttpEvent<any>> {
    // 统一加上服务端前缀
    let url = req.url;
    if ( ! url.startsWith ( "https://" ) && ! url.startsWith ( "http://" ) ) {
      url = environment.SERVER_URL + url;
    }
    const newReq = req.clone ( {
      url : url ,
    } );
    return next.handle ( newReq );
  }

}
