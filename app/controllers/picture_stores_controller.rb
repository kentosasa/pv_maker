class PictureStoresController < ApplicationController
  before_action :set_picture_store, only: [:show, :edit, :update, :destroy]

  # GET /picture_stores
  # GET /picture_stores.json
  def index
    @picture_stores = PictureStore.all
  end

  # GET /picture_stores/1
  # GET /picture_stores/1.json
  def show
  end

  # GET /picture_stores/new
  def new
    @picture_store = PictureStore.new
  end

  # GET /picture_stores/1/edit
  def edit
  end

  # POST /picture_stores
  # POST /picture_stores.json
  def create
    @picture_store = PictureStore.new(picture_store_params)

    respond_to do |format|
      if @picture_store.save
        format.html { redirect_to @picture_store, notice: 'Picture store was successfully created.' }
        format.json { render :show, status: :created, location: @picture_store }
      else
        format.html { render :new }
        format.json { render json: @picture_store.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /picture_stores/1
  # PATCH/PUT /picture_stores/1.json
  def update
    respond_to do |format|
      if @picture_store.update(picture_store_params)
        format.html { redirect_to @picture_store, notice: 'Picture store was successfully updated.' }
        format.json { render :show, status: :ok, location: @picture_store }
      else
        format.html { render :edit }
        format.json { render json: @picture_store.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /picture_stores/1
  # DELETE /picture_stores/1.json
  def destroy
    @picture_store.destroy
    respond_to do |format|
      format.html { redirect_to picture_stores_url, notice: 'Picture store was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_picture_store
      @picture_store = PictureStore.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def picture_store_params
      params.require(:picture_store).permit(:store_name, :picture, :content)
    end
end
