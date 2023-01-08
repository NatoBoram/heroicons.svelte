import type { Meta, StoryObj } from '@storybook/svelte'
import { PaperClip as PaperClipSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: PaperClipSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<PaperClipSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const PaperClip: Story = {}
