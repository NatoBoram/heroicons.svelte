<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import UnderlineSvelte from '../../../lib/16/solid/underline.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: UnderlineSvelte,
		args: { class: '' },
	})
</script>

<Story name="Underline" />
