import type { Meta, StoryObj } from '@storybook/svelte'
import { PaperClip as PaperClipSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Outline',
	component: PaperClipSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<PaperClipSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const PaperClip: Story = {}
