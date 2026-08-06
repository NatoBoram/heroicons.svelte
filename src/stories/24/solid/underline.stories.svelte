<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import UnderlineSvelte from '../../../lib/24/solid/underline.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: UnderlineSvelte,
		args: { class: '' },
	})
</script>

<Story name="Underline" />
