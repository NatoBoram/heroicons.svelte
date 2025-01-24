<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import UnderlineSvelte from '../../../lib/24/outline/underline.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: UnderlineSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Underline" />
