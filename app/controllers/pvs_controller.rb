class PvsController < ApplicationController
  before_action :set_pv, only: [:show, :edit, :update, :destroy]

  # GET /pvs
  # GET /pvs.json
  def index
    @pvs = Pv.all
  end

  # GET /pvs/1
  # GET /pvs/1.json
  def show
    @pictures = PictureStore.where(id: @pv.id)
  end

  # GET /pvs/new
  def new
    @pv = Pv.new
  end

  # GET /pvs/1/edit
  def edit
  end

  # POST /pvs
  # POST /pvs.json
  def create
    @pv = Pv.new(pv_params)

    respond_to do |format|
      if @pv.save
        format.html { redirect_to @pv, notice: 'Pv was successfully created.' }
        format.json { render :show, status: :created, location: @pv }
      else
        format.html { render :new }
        format.json { render json: @pv.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /pvs/1
  # PATCH/PUT /pvs/1.json
  def update
    respond_to do |format|
      if @pv.update(pv_params)
        format.html { redirect_to @pv, notice: 'Pv was successfully updated.' }
        format.json { render :show, status: :ok, location: @pv }
      else
        format.html { render :edit }
        format.json { render json: @pv.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /pvs/1
  # DELETE /pvs/1.json
  def destroy
    @pv.destroy
    respond_to do |format|
      format.html { redirect_to pvs_url, notice: 'Pv was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_pv
      @pv = Pv.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def pv_params
      params.require(:pv).permit(:title, :user_name, :password)
    end
end
