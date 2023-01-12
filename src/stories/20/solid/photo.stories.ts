import type { Meta, StoryObj } from '@storybook/svelte'
import { Photo as PhotoSvelte } from '../../../lib/20/solid'

const meta = {
	title: 'Heroicons/Mini',
	component: PhotoSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<PhotoSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Photo: Story = {}
