<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import UnderlineSvelte from '../../../lib/24/solid/underline.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: UnderlineSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Underline" />
