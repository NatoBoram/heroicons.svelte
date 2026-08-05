<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import UnderlineSvelte from '../../../lib/20/solid/underline.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: UnderlineSvelte,
		args: { class: '' },
	})
</script>

<Story name="Underline" />
