<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ArrowUturnUpSvelte from '../../../lib/20/solid/arrow-uturn-up.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ArrowUturnUpSvelte,
		args: { class: '' },
	})
</script>

<Story name="ArrowUturnUp" />
