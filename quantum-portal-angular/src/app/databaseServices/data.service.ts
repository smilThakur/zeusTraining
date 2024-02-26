import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { WalkinGlance } from './WalkinGlanceDTO';
import { WalkinDTO } from './WalkinDTO';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  private subscription: Subscription | undefined;

  getCollegeNames(): Promise<string[]> {

    let url = "https://localhost:7027/api/data/colleges"
    return new Promise((resolve, reject) => {
      this.subscription = this.http.get(url).subscribe(
        {
          next: (data) => {
            console.log(data)
            resolve(data as string[])
          },
          error: (error) => {
            console.log(error)
            reject(error)
          }
        }
      )
    })
  }

  getQualifications(): Promise<string[]> {

    let url = "https://localhost:7027/api/data/qualifications"
    return new Promise((resolve, reject) => {
      this.subscription = this.http.get(url).subscribe(
        {
          next: (data) => {
            console.log(data)
            resolve(data as string[])
          },
          error: (error) => {
            console.log(error)
            reject(error)
          }
        }
      )
    })
  }

  getStreams(): Promise<string[]> {

    let url = "https://localhost:7027/api/data/streams"
    return new Promise((resolve, reject) => {
      this.subscription = this.http.get(url).subscribe(
        {
          next: (data) => {
            console.log(data)
            resolve(data as string[])
          },
          error: (error) => {
            console.log(error)
            reject(error)
          }
        }
      )
    })
  }

  uploadResume(resume: File): Promise<string> {
    let url = "https://localhost:7027/api/Data/uploadresume"

    let formData = new FormData()
    formData.append('file', resume)

    return new Promise((resolve, reject) => {
      this.subscription = this.http.post(url, formData, { responseType: 'text' }).subscribe({
        next: (data) => {
          console.log(data);
          resolve(data)
        },
        error: (error) => {
          reject(error)
        }
      })
    })
  }

  updateResume(resume: File, userId: number): Observable<any> {
    let url = `https://localhost:7027/api/Data/updateResume${userId}`

    let formData = new FormData()
    formData.append('file', resume)

    return this.http.post<any>(url, formData);


  }

  uploadDisplayImg(img: File): Promise<string> {
    let url = "https://localhost:7027/api/Data/uploaddisplayimage"

    let formDate = new FormData()
    formDate.append('file', img)

    return new Promise((resolve, reject) => {
      this.subscription = this.http.post(url, formDate, { responseType: 'text' }).subscribe({
        next: (data) => {
          resolve(data)
        },
        error: (err) => {
          reject(err)
        },
      })
    })
  }

  checkUniqueEmail(email: string): Promise<number> {

    return new Promise((resolve, reject) => {
      this.subscription = this.http.post("https://localhost:7027/api/checkemail", { "email": email }).subscribe({
        next: (data) => {
          resolve(data as number)
        },
        error: (error) => {
          reject(error)
        }
      });
    })

  }

  getWalkinGlances(): Observable<WalkinGlance> {
    return this.http.get<WalkinGlance>("https://localhost:7027/api/Walkin/all")
  }

  getDisplayImg(userid: number): Observable<any> {
    return this.http.get<any>(`https://localhost:7027/api/Data/getdisplayImage?uid=${userid}`)
  }

  getWalkinDetails(id: number): Observable<WalkinDTO> {
    return this.http.get<WalkinDTO>(`https://localhost:7027/api/Walkin/${id}`)
  }

}
