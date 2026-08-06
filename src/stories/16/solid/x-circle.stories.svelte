<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import XCircleSvelte from '../../../lib/16/solid/x-circle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: XCircleSvelte,
		args: { class: '' },
	})
</script>

<Story name="XCircle" />
